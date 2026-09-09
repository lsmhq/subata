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
          v-model:value="packKey"
          :options="packOptions"
          placeholder="选择一个卡包"
          size="small"
          style="width: 340px"
        />
        <n-button type="primary" size="small" :disabled="crowns < pack.crowns" @click="openPack">
          开包（{{ pack.crowns }} 皇冠）
        </n-button>
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

      <div v-if="results.length" class="results">
        <div class="results-title">本次开包内容</div>
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
        <div class="results-note">官方卡包每包给出 7 件随机物品；掉率档位参照官方稀有度标注整理，具体百分比为社区估算，不代表官方数值。</div>
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
    pickUnique() {
      const weights = source.rarityWeights;
      const pool = [];
      this.pack.items.forEach((item) => {
        const w = weights[item.rarity] || 1;
        for (let i = 0; i < w; i++) pool.push(item);
      });
      return pool[Math.floor(Math.random() * pool.length)];
    },
    newResult(name, type, rarity, base) {
      return { name, type, rarity, base: !!base };
    },
    openPack() {
      if (this.crowns < this.pack.crowns) return;
      const results = [];
      results.push(this.newResult(this.pickOne(source.basics.elixirs), "elixir", "common", true));
      results.push(this.newResult(this.pickOne(source.basics.snacks), "snack", "common", true));
      results.push(this.newResult(this.pickOne(source.basics.snacks), "snack", "common", true));
      results.push(this.newResult(this.pickOne(source.basics.snacks), "snack", "common", true));
      results.push(this.newResult(this.pickOne(source.basics.cards), "card", "common", true));

      const u1 = this.pickUnique();
      const u2 = this.pickUnique();
      results.push(this.newResult(u1.name, u1.type, u1.rarity, false));
      results.push(this.newResult(u2.name, u2.type, u2.rarity, false));

      const bag = { ...this.bag };
      [u1, u2].forEach((it) => {
        const k = this.pack.key + "::" + it.name;
        bag[k] = (bag[k] || 0) + 1;
      });

      this.bag = bag;
      this.crowns -= this.pack.crowns;
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
</style>