<template>
  <n-config-provider :theme="dark ? darkTheme : null">
    <div class="pack-sim">
      <div class="head">
        <div class="crowns">
          <span class="label">皇冠余额</span>
          <span class="value">{{ crowns.toLocaleString() }}</span>
        </div>
        <div class="crowns">
          <span class="label">开包次数</span>
          <span class="value">{{ total }}</span>
        </div>
        <n-button size="small" quaternary @click="reset">重置</n-button>
      </div>

      <div class="control">
        <n-select
          class="pack-select"
          v-model:value="packKey"
          :options="packOptions"
          placeholder="选择一个卡包"
          size="small"
        />
        <template v-if="bulkTotal">
          <n-button type="primary" size="small" @click="nextBulk">
            下一包（剩 {{ bulkLeft }} 包）
          </n-button>
          <span class="bulk-tip">十连开包中，皇冠已一次性扣除，点「下一包」逐包揭晓</span>
        </template>
        <template v-else>
          <n-button type="primary" size="small" :disabled="crowns < pack.crowns" @click="openPack">
            开包（{{ pack.crowns }} 皇冠）
          </n-button>
          <n-button type="primary" size="small" :disabled="crowns < pack.crowns * 10" @click="open10">
            开10包（{{ pack.crowns * 10 }} 皇冠）
          </n-button>
        </template>
      </div>

      <div v-if="results.length" class="results">
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
              <div class="face face-cover">
                <span class="cover-mark">?</span>
              </div>
              <div class="face face-content">
                <div class="content-name">{{ item.name }}</div>
                <div class="content-tags">
                  <span class="preview-type">{{ typeLabel(item.type) }}</span>
                  <span class="content-rare">{{ rarityLabel(item.rarity) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="results-note">官方卡包每包给出 7 件随机物品；掉率为社区按长期开包整理的估算，不代表官方数值。</div>
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

      <n-card v-if="pack" size="small" class="pack-info" :title="pack.name">
        <template #header>
          <div class="pack-head">
            <span>{{ pack.name }}</span>
            <n-tag :bordered="false" size="small" :type="pack.type === 'Lore' ? 'info' : 'warning'">
              {{ pack.type === "Lore" ? "学识包 Lore" : "囤积包 Hoard" }}
            </n-tag>
            <n-tag :bordered="false" size="small" :type="gradeType">{{ gradeLabel }}级</n-tag>
          </div>
        </template>
        <div class="pack-desc">{{ pack.desc }}</div>
        <div class="item-preview">
          <div
            v-for="item in pack.items"
            :key="item.name"
            class="preview-item"
            :class="'r-' + item.rarity"
          >
            <img v-if="item.image" class="item-img" :src="packAsset(item.image)" alt="" />
            <span class="preview-name">{{ item.name }}</span>
            <span class="preview-rare">{{ rarityLabel(item.rarity) }}</span>
          </div>
        </div>
      </n-card>

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
  </n-config-provider>
</template>

<script>
import {
  NButton,
  NCard,
  NConfigProvider,
  NSelect,
  NTag,
  darkTheme,
} from "naive-ui";
import source from "./packs.json";

const KEY = "subata_pack_sim";

export default {
  name: "PackSimulator",
  components: {
    NButton,
    NCard,
    NConfigProvider,
    NSelect,
    NTag,
  },
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
      dark: false,
    };
  },
  computed: {
    pack() {
      return this.packs.find((p) => p.key === this.packKey) || this.packs[0];
    },
    packOptions() {
      return this.packs.map((p) => ({ label: p.name, value: p.key }));
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
  },
  watch: {
    packKey() {
      this.results = [];
      this.flipped = [];
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
        card: "法术卡",
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
        ...source.basics.snacks.map((n) => ({ name: n, type: "snack" })),
        ...source.basics.cards.map((n) => ({ name: n, type: "card" })),
        ...source.basics.housing.map((n) => ({ name: n, type: "housing" })),
      ];
      const others = this.pack.items.filter(
        (it) => !["mount_perm", "mount_temp", "pet", "topgear"].includes(this.categoryOf(it))
      );

      const misc = [];
      while (misc.length < 7 - specials.length) {
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
      if (this.bulkTotal) return;
      this.applyRoll();
    },
    open10() {
      if (this.bulkTotal) return;
      const cost = this.pack.crowns * 10;
      if (this.crowns < cost) return;
      this.crowns -= cost;
      this.bulkTotal = 10;
      this.bulkLeft = 10;
      this.nextBulk();
    },
    nextBulk() {
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
      this.persist();

      this.$nextTick(() => {
        const timers = [];
        results.forEach((_, i) => {
          timers.push(
            setTimeout(() => {
              const next = this.flipped.slice();
              next[i] = true;
              this.flipped = next;
            }, 360 + i * 320)
          );
        });
        this._flipTimers = timers;
      });
    },
    reset() {
      this.crowns = 999999;
      this.total = 0;
      this.bag = {};
      this.bulkTotal = 0;
      this.bulkLeft = 0;
      this.results = [];
      this.flipped = [];
      if (this._flipTimers) {
        this._flipTimers.forEach((t) => clearTimeout(t));
        this._flipTimers = null;
      }
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
}
.bulk-tip {
  font-size: 12px;
  color: #999;
}
.pack-info {
  margin-bottom: 14px;
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
  gap: 10px;
}
.card {
  width: 116px;
  height: 150px;
  perspective: 900px;
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
  background: repeating-linear-gradient(
    45deg,
    #5b6b8c,
    #5b6b8c 10px,
    #4a5a7a 10px,
    #4a5a7a 20px
  );
  color: rgba(255, 255, 255, 0.85);
  font-size: 34px;
  font-weight: 700;
  border: 2px solid #39455f;
}
.cover-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
}
.face-content {
  transform: rotateY(180deg);
  background: #fff;
  border: 2px solid #e2e5eb;
  color: #333;
  justify-content: flex-start;
  padding: 10px;
}
.r-epic .face-content {
  border-color: #f0a020;
  box-shadow: 0 0 18px rgba(240, 160, 32, 0.55);
  background: linear-gradient(160deg, #fffdf6, #fff3d6);
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
.content-name {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  word-break: break-word;
}
.content-tags {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
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