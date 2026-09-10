<template>
  <div class="pack-sim" :class="{ dark }">
    <div class="head">
      <div class="crowns">
        <span class="label">皇冠余额</span>
        <span class="value">{{ crowns.toLocaleString() }}</span>
      </div>
      <div class="crowns">
        <span class="label">开包次数</span>
        <span class="value">{{ total }}</span>
      </div>
      <button class="link-btn" @click="reset">重置</button>
    </div>

    <div class="control">
      <select class="pack-select" v-model="packKey">
        <option v-for="p in packs" :key="p.key" :value="p.key">{{ p.name }}</option>
      </select>
      <template v-if="bulkTotal">
        <button class="btn primary" :disabled="flipping" @click="nextBulk">
          下一包
        </button>
        <span class="bulk-tip">十连开包中：已开 {{ bulkTotal - bulkLeft }} / {{ bulkTotal }}，自动连开中</span>
      </template>
      <template v-else>
        <button class="btn primary" :disabled="flipping || crowns < pack.crowns" @click="openPack">
          开包（{{ pack.crowns }} 皇冠）
        </button>
        <button class="btn primary" :disabled="flipping || crowns < pack.crowns * 10" @click="open10">
          开10包（{{ pack.crowns * 10 }} 皇冠）
        </button>
      </template>
    </div>

      <div v-if="results.length" class="results" :style="resultsBg()">
        <div class="results-title">
          {{ bulkTotal ? "本次开包内容 · 第 " + (bulkTotal - bulkLeft) + "/" + bulkTotal + " 包" : "本次开包内容" }}
        </div>
        <div class="cards">
          <div
            v-for="(item, index) in results"
            :key="index"
            class="card"
            :class="{ flipped: flipped[index], 'r-common': item.rarity === 'common', 'r-uncommon': item.rarity === 'uncommon', 'r-rare': item.rarity === 'rare', 'r-ultra-rare': item.rarity === 'ultra-rare', 'r-epic': item.rarity === 'epic' }"
          >
            <div class="card-inner">
              <div class="face face-cover" :style="coverOf(item.rarity)">
                <span class="cover-mark">?</span>
              </div>
              <div class="face face-content" :style="contentBg(item)">
                <template v-if="revealed[index]">
                  <div class="content-name">{{ item.name }}</div>
                  <img
                    v-if="iconOf(item.name, item.type)"
                    class="content-icon"
                    :src="iconOf(item.name, item.type)"
                    :alt="item.name"
                  />
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="results-note">官方卡包每包给出 {{ perPack }} 件随机物品；掉率为社区按长期开包整理的估算，不代表官方数值。</div>
      </div>

      <div class="inv">
        <div class="inv-title">我的背包</div>
        <div v-if="invItems.length" class="inv-list">
          <div v-for="item in invItems" :key="item.name" class="inv-item">
            <img v-if="invIcon(item.name, item.type)" class="inv-icon" :src="invIcon(item.name, item.type)" alt="" />
            <span class="inv-name">{{ item.name }}</span>
            <span class="inv-type">{{ item.type ? typeLabel(item.type) : "" }}</span>
            <span class="inv-count">x{{ item.count }}</span>
          </div>
        </div>
        <div v-else class="inv-empty">还没有抽到任何物品，先开一包试试。</div>
      </div>

      <div class="odds">
        <div class="odds-title">卡包掉率参考（每包，社区估算）</div>
        <ul class="odds-list">
          <li><b>永久坐骑</b>（大奖）：约 <b>0.5%～1.5%</b>，平均 70–200 包出一只</li>
          <li><b>卡包限定宠物</b>：约 <b>2%～4%</b></li>
          <li><b>毕业套装单件</b>：约 <b>5%</b>，凑整套看运气、单件易重复</li>
          <li><b>限时坐骑</b>（1天 / 7天）：约 <b>十几 %</b>，仅临时使用，非大奖</li>
          <li><b>其余绝大多数</b>：零食、家具、宝藏卡、金币、普通饰品</li>
        </ul>
      </div>

      <div v-if="pack" class="cardbox pack-info">
        <div class="pack-head">
          <span>{{ pack.name }}</span>
          <span class="tag" :class="pack.type === 'Lore' ? 'tag-info' : 'tag-warning'">
            {{ pack.type === "Lore" ? "学识包 Lore" : "囤积包 Hoard" }}
          </span>
          <span class="tag" :class="'tag-' + gradeType">{{ gradeLabel }}级</span>
        </div>
        <div class="pack-desc">{{ pack.desc }}</div>
        <div class="item-preview">
          <div
            v-for="item in pack.items"
            :key="item.name"
            class="preview-item"
            :class="'r-' + item.rarity"
          >
            <img v-if="iconOf(item.name, item.type)" class="item-img" :src="iconOf(item.name, item.type)" alt="" />
            <span class="preview-name">{{ item.name }}</span>
            <span class="preview-rare">{{ rarityLabel(item.rarity) }}</span>
          </div>
        </div>
      </div>

      <div v-if="pack" class="bag">
        <h4>本包背包（独特物品集齐进度）</h4>
        <div class="bag-list">
          <div v-for="item in pack.items" :key="item.name" class="bag-row">
            <span class="bag-dot" :class="'r-' + item.rarity"></span>
            <span class="bag-name">{{ item.name }}</span>
            <span class="preview-type">{{ typeLabel(item.type) }}</span>
            <span class="bag-count" :class="{ zero: !(bag[key(item)] > 0) }">
              {{ bag[key(item)] || 0 }}
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import source from "./packs.json";
import cards from "./cards.json";

const KEY = "subata_pack_sim";

export default {
  name: "PackSimulator",
  components: {},
  data() {
    const hasStorage = typeof localStorage !== "undefined";
    let saved = null;
    try {
      saved = hasStorage ? JSON.parse(localStorage.getItem(KEY)) : null;
    } catch (e) {
      saved = null;
    }
    return {
      packs: source.packs,
      packKey: (saved && saved.packKey) || source.packs[0].key,
      crowns: saved && typeof saved.crowns === "number" ? saved.crowns : 999999,
      total: saved && typeof saved.total === "number" ? saved.total : 0,
      bag: saved && saved.bag ? saved.bag : {},
      bulkTotal: saved && typeof saved.bulkTotal === "number" ? saved.bulkTotal : 0,
      bulkLeft: saved && typeof saved.bulkLeft === "number" ? saved.bulkLeft : 0,
      results: [],
      flipped: [],
      revealed: [],
      flipping: false,
      dark: false,
      facts: cards,
    };
  },
  computed: {
    pack() {
      return this.packs.find((p) => p.key === this.packKey) || this.packs[0];
    },
    perPack() {
      return source.perPack || 10;
    },
    gradeType() {
      const g = this.pack.grade;
      if (g === "A") return "success";
      if (g === "B") return "warning";
      return "error";
    },
    gradeLabel() {
      return this.pack.grade;
    },
    itemMeta() {
      const map = {};
      for (const p of this.packs) {
        for (const it of p.items) {
          if (!map[it.name]) {
            map[it.name] = { type: it.type, icon: it.image || "", rarity: it.rarity };
          }
        }
      }
      return map;
    },
    invItems() {
      const byName = {};
      for (const k of Object.keys(this.bag)) {
        const name = k.split("::")[1] || k;
        byName[name] = (byName[name] || 0) + this.bag[k];
      }
      const meta = this.itemMeta;
      return Object.entries(byName)
        .sort((a, b) => b[1] - a[1])
        .map(([name, count]) => ({
          name,
          count,
          type: meta[name] ? meta[name].type : "",
          icon: meta[name] ? meta[name].icon : "",
        }));
    },
  },
  watch: {
    packKey() {
      this.results = [];
      this.flipped = [];
      this.revealed = [];
      this.bulkTotal = 0;
      this.bulkLeft = 0;
    },
  },
  methods: {
    key(item) {
      return this.pack.key + "::" + item.name;
    },
    typeLabel(t) {
      const map = {
        equip: "装备",
        mount: "坐骑",
        pet: "宠物",
        spellment: "技能碎片",
        appearance: "外观",
        furniture: "家具",
        elixir: "药水",
        snack: "零食",
        reagent: "打造材料",
        card: "宝藏卡",
        housing: "家具",
      };
      return map[t] || t;
    },
    rarityLabel(r) {
      const map = { common: "普通", uncommon: "精良", rare: "稀有", "ultra-rare": "极稀", epic: "传说" };
      return map[r] || r;
    },
    packAsset(file) {
      if (!file) return "";
      return "/subata/assets/pack/" + file;
    },
    packImg() {
      return "";
    },
    coverOf() {
      const url = this.facts.covers.back;
      return {
        background:
          "linear-gradient(rgba(10, 14, 26, 0.35), rgba(10, 14, 26, 0.55)), url('" + url + "') center / cover no-repeat",
      };
    },
    contentBg(item) {
      const url = this.frameOf(item.type, item.name);
      return {
        background:
          "linear-gradient(180deg, rgba(12, 16, 28, 0.4) 0%, rgba(12, 16, 28, 0.16) 30%, rgba(12, 16, 28, 0.24) 62%, rgba(12, 16, 28, 0.58) 85%, rgba(9, 11, 17, 0.9) 100%), url('" +
          url +
          "') top center / 100% auto no-repeat, #8a6a3a",
      };
    },
    resultsBg() {
      return {};
    },
    iconOf(name, type) {
      const find = (arr) => {
        const hit = arr.find(([n]) => n === name);
        return hit ? hit[1] : "";
      };
      if (type === "snack") return find(this.facts.snacks);
      if (type === "reagent") return find(this.facts.reagents);
      if (type === "spellment") return find(this.facts.spellments);
      return "";
    },
    frameOf(type, name) {
      const F = this.facts.frames;
      switch (type) {
        case "card":
          return F.treasure;
        case "spellment":
        case "equip":
        case "elixir":
        case "reagent":
          return F.item;
        case "mount":
        case "pet":
        case "appearance":
        case "furniture":
        case "housing":
        case "snack":
        default:
          return F.frame;
      }
    },
    invIcon(name, type) {
      return this.iconOf(name, type);
    },
    pickOne(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    categoryOf(it) {
      if (it.type === "mount") {
        if (/永久/.test(it.name) || it.rarity === "epic") return "mount_perm";
        if (/天/.test(it.name)) return "mount_temp";
        return "mount_perm";
      }
      if (it.type === "pet") return "pet";
      if (it.rarity === "ultra-rare" || (it.type === "equip" && it.rarity === "rare")) return "topgear";
      return "other";
    },
    weightedOther(list) {
      const w = { rare: 3, uncommon: 2, common: 1 };
      const pool = [];
      list.forEach((it) => {
        const n = w[it.rarity] || 1;
        for (let i = 0; i < n; i++) pool.push(it);
      });
      return pool[Math.floor(Math.random() * pool.length)];
    },
    newResult(name, type, rarity, base) {
      return { name, type, rarity, base: !!base };
    },
    rollOnce() {
      const gates = [
        ["mount_perm", 0.01],
        ["pet", 0.03],
        ["topgear", 0.05],
        ["mount_temp", 0.13],
      ];
      const specials = [];
      gates.forEach(([cat, p]) => {
        if (Math.random() < p) {
          const pool = this.pack.items.filter((it) => this.categoryOf(it) === cat);
          if (pool.length) specials.push(pool[Math.floor(Math.random() * pool.length)]);
        }
      });

      const basicPool = [
        ...source.basics.elixirs.map((n) => ({ name: n, type: "elixir" })),
        ...source.basics.cards.map((n) => ({ name: n, type: "card" })),
        ...source.basics.housing.map((n) => ({ name: n, type: "housing" })),
        ...this.facts.snacks.map(([n]) => ({ name: n, type: "snack" })),
        ...this.facts.reagents.map(([n]) => ({ name: n, type: "reagent" })),
        ...this.facts.spellments.map(([n]) => ({ name: n, type: "spellment" })),
      ];
      const others = this.pack.items.filter(
        (it) => !["mount_perm", "mount_temp", "pet", "topgear"].includes(this.categoryOf(it))
      );

      const misc = [];
      const target = this.perPack;
      while (misc.length < target - specials.length) {
        if (others.length && Math.random() < 0.2) {
          const it = this.weightedOther(others);
          misc.push(this.newResult(it.name, it.type, it.rarity, false));
        } else {
          const b = this.pickOne(basicPool);
          misc.push(this.newResult(b.name, b.type, "common", true));
        }
      }

      return { results: [...misc, ...specials], specials };
    },
    openPack() {
      if (this.bulkTotal || this.flipping) return;
      this.applyRoll();
    },
    open10() {
      if (this.bulkTotal || this.flipping) return;
      const cost = this.pack.crowns * 10;
      if (this.crowns < cost) return;
      this.crowns -= cost;
      this.bulkTotal = 10;
      this.bulkLeft = 10;
      this.nextBulk();
    },
    nextBulk() {
      if (this.flipping) return;
      if (this.bulkLeft <= 0) {
        this.bulkTotal = 0;
        return;
      }
      this.bulkLeft -= 1;
      this.applyRoll();
    },
    applyRoll() {
      const { results, specials } = this.rollOnce();

      const bag = { ...this.bag };
      specials.forEach((it) => {
        const k = this.pack.key + "::" + it.name;
        bag[k] = (bag[k] || 0) + 1;
      });

      this.bag = bag;
      this.total += 1;
      this.results = results;
      this.flipped = results.map(() => false);
      this.revealed = results.map(() => false);
      this.persist();

      this.$nextTick(() => {
        this.flipping = true;
        const last = results.length - 1;
        results.forEach((_, i) => {
          const t = 360 + i * 320;
          setTimeout(() => {
            const next = this.flipped.slice();
            next[i] = true;
            this.flipped = next;
          }, t);
          setTimeout(() => {
            const r = this.revealed.slice();
            r[i] = true;
            this.revealed = r;
            if (i === last) {
              this.flipping = false;
              if (this.bulkLeft === 0) {
                this.bulkTotal = 0;
              } else if (this.bulkTotal) {
                setTimeout(() => {
                  if (this.bulkTotal && this.bulkLeft > 0 && !this.flipping) {
                    this.nextBulk();
                  }
                }, 700);
              }
            }
          }, t + 240);
        });
      });
    },
    reset() {
      this.crowns = 999999;
      this.total = 0;
      this.bag = {};
      this.bulkTotal = 0;
      this.bulkLeft = 0;
      this.flipping = false;
      this.results = [];
      this.flipped = [];
      this.revealed = [];
      this.persist();
    },
    persist() {
      if (typeof localStorage === "undefined") return;
      try {
        localStorage.setItem(
          KEY,
          JSON.stringify({
            crowns: this.crowns,
            total: this.total,
            bag: this.bag,
            bulkTotal: this.bulkTotal,
            bulkLeft: this.bulkLeft,
            packKey: this.packKey,
          })
        );
      } catch (e) {}
    },
  },
  mounted() {
    if (typeof document !== "undefined") {
      this._observer = new MutationObserver(() => {
        this.dark = document.documentElement.classList.contains("dark");
      });
      this._observer.observe(document.documentElement, { attributes: true });
    }
  },
  unmounted() {
    if (this._observer) this._observer.disconnect();
    if (this._flipTimers) this._flipTimers.forEach((t) => clearTimeout(t));
  },
};
</script>

<style scoped>
.pack-sim {
  max-width: 860px;
}
.head {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 14px;
}
.crowns {
  display: flex;
  flex-direction: column;
}
.crowns .label {
  font-size: 12px;
  color: #888;
}
.crowns .value {
  font-size: 26px;
  font-weight: 700;
}
.control {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.pack-select {
  width: 340px;
  padding: 4px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 13px;
}
.btn {
  padding: 0 18px;
  height: 28px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn.primary {
  background: #18a058;
  color: #fff;
}
.btn.primary:hover {
  opacity: 0.9;
}
.btn.primary:disabled,
.btn.primary[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
.link-btn {
  border: none;
  background: none;
  color: #888;
  font-size: 12px;
  cursor: pointer;
  padding: 0;
}
.link-btn:hover {
  color: #18a058;
  text-decoration: underline;
}
.bulk-tip {
  font-size: 12px;
  color: #999;
}
.tag {
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  height: 20px;
  border-radius: 10px;
  font-size: 12px;
  border: 1px solid;
}
.tag-info {
  color: #2080f0;
  border-color: #2080f0;
  background: #2080f014;
}
.tag-warning {
  color: #f0a020;
  border-color: #f0a020;
  background: #f0a02014;
}
.tag-success {
  color: #18a058;
  border-color: #18a058;
  background: #18a05814;
}
.tag-error {
  color: #d03050;
  border-color: #d03050;
  background: #d0305014;
}
.pack-info {
  margin-bottom: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 12px 16px;
  background: var(--vp-c-bg);
}
.pack-head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pack-desc {
  color: #666;
  font-size: 13px;
  line-height: 1.8;
  margin-bottom: 12px;
}
.item-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.preview-item {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e2e5eb;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 13px;
}
.preview-item.r-epic {
  border-color: #f0a020;
  background: rgba(240, 160, 32, 0.07);
}
.preview-item.r-ultra-rare {
  border-color: #9c27b0;
  background: rgba(156, 39, 176, 0.06);
}
.preview-item.r-rare {
  border-color: #2080f0;
  background: rgba(32, 128, 240, 0.06);
}
.preview-item.r-uncommon {
  border-color: #4caf50;
  background: rgba(76, 175, 80, 0.05);
}
.item-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
.preview-name {
  font-size: 13px;
}
.preview-rare {
  font-size: 12px;
  font-weight: 600;
}
.r-epic .preview-rare,
.r-epic .content-rare {
  color: #f0a020;
}
.r-ultra-rare .preview-rare,
.r-ultra-rare .content-rare {
  color: #9c27b0;
}
.r-rare .preview-rare,
.r-rare .content-rare {
  color: #2080f0;
}
.r-uncommon .preview-rare,
.r-uncommon .content-rare {
  color: #4caf50;
}
.preview-type {
  font-size: 11px;
  color: #888;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1px 5px;
  white-space: nowrap;
}
.results {
  margin-bottom: 16px;
  border-radius: 12px;
  padding: 12px 14px;
}
.odds {
  border: 1px dashed #e2e5eb;
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 16px;
  background: rgba(128, 128, 128, 0.03);
}
.odds-title {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
}
.odds-list {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  line-height: 1.9;
  color: #555;
}
.odds-list b {
  color: #333;
}
.results-title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}
.card {
  width: 150px;
  height: 230px;
  perspective: 900px;
}
@media (max-width: 719px) {
  .cards {
    gap: 10px;
  }
  .card {
    width: 104px;
    height: 156px;
  }
  .cover-mark {
    width: 44px;
    height: 44px;
  }
  .face {
    padding: 6px;
  }
  .content-icon {
    width: 56px;
    height: 56px;
    margin: auto 0;
  }
  .content-name {
    top: 6px;
    left: 4px;
    right: 4px;
    max-height: 33px;
    font-size: 11px;
  }
  .face-content .preview-type {
    font-size: 10px;
  }
  .content-rare {
    font-size: 11px;
  }
}
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}
.card.flipped .card-inner {
  transform: rotateY(180deg);
}
.face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
}
.face-cover {
  color: rgba(255, 255, 255, 0.9);
  font-size: 34px;
  font-weight: 700;
  border: 2px solid #39455f;
}
.r-epic .face-cover {
  border-color: #f0a020;
  box-shadow: 0 0 18px rgba(240, 160, 32, 0.45);
}
.r-epic .cover-mark {
  background: rgba(240, 160, 32, 0.45);
}
.r-ultra-rare .face-cover {
  border-color: #9c27b0;
  box-shadow: 0 0 14px rgba(156, 39, 176, 0.4);
}
.r-ultra-rare .cover-mark {
  background: rgba(156, 39, 176, 0.4);
}
.r-rare .face-cover {
  border-color: #2080f0;
  box-shadow: 0 0 12px rgba(32, 128, 240, 0.35);
}
.r-rare .cover-mark {
  background: rgba(32, 128, 240, 0.3);
}
.r-uncommon .face-cover {
  border-color: #4caf50;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
}
.r-uncommon .cover-mark {
  background: rgba(76, 175, 80, 0.3);
}
.cover-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
}
.face-content {
  transform: rotateY(180deg);
  border: 2px solid #e2e5eb;
  color: #fff;
  justify-content: center;
  padding: 10px;
}
.r-epic .face-content {
  border-color: #f0a020;
  box-shadow: 0 0 18px rgba(240, 160, 32, 0.55);
}
.r-ultra-rare .face-content {
  border-color: #9c27b0;
  box-shadow: 0 0 12px rgba(156, 39, 176, 0.35);
}
.r-rare .face-content {
  border-color: #2080f0;
}
.r-uncommon .face-content {
  border-color: #4caf50;
}
.content-icon {
  flex: none;
  width: 76px;
  height: 76px;
  object-fit: contain;
  margin: auto 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}
.content-name {
  position: absolute;
  top: 8px;
  left: 6px;
  right: 6px;
  z-index: 1;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-height: 45px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
  word-break: break-word;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}
.face-content .preview-type {
  color: #e8ecf5;
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 1px 5px;
  font-size: 11px;
  white-space: nowrap;
}
.content-rare {
  font-size: 12px;
  font-weight: 700;
}
.results-note {
  margin-top: 8px;
  font-size: 12px;
  color: #999;
}
.inv {
  margin-bottom: 14px;
}
.inv-title {
  font-weight: 700;
  margin-bottom: 8px;
}
.inv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-height: 320px;
  overflow-y: auto;
}
.inv-item {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 13px;
  background: var(--vp-c-bg);
}
.inv-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex: none;
}
.inv-name {
  font-weight: 600;
}
.inv-type {
  font-size: 12px;
  color: #888;
}
.inv-count {
  font-weight: 700;
  color: #d03050;
}
.inv-empty {
  font-size: 13px;
  color: #999;
}
.bag h4 {
  margin: 4px 0 10px;
}
.bag-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.bag-row {
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px dashed #eee;
  padding: 6px 2px;
}
.bag-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.bag-dot.r-common {
  background: #9aa0a6;
}
.bag-dot.r-uncommon {
  background: #4caf50;
}
.bag-dot.r-rare {
  background: #2080f0;
}
.bag-dot.r-ultra-rare {
  background: #9c27b0;
}
.bag-dot.r-epic {
  background: #f0a020;
  box-shadow: 0 0 6px rgba(240, 160, 32, 0.8);
}
.bag-name {
  flex: 1;
  font-size: 14px;
}
.bag-count {
  min-width: 40px;
  text-align: right;
  font-weight: 700;
}
.bag-count.zero {
  color: #bbb;
  font-weight: 400;
}

@media (max-width: 768px) {
  .pack-sim {
    max-width: 100%;
  }
  .head {
    gap: 18px;
    flex-wrap: wrap;
  }
  .crowns .value {
    font-size: 20px;
  }
  .control {
    flex-wrap: wrap;
  }
  .pack-select {
    width: 100%;
    flex: 1 1 100%;
  }
  .pack-head {
    flex-wrap: wrap;
  }
  .preview-item {
    flex: 1 1 calc(50% - 8px);
    min-width: 0;
  }
  .cards {
    gap: 8px;
  }
  .card {
    width: calc(33.333% - 6px);
    height: 128px;
  }
  .odds {
    padding: 8px 10px;
  }
}
</style>