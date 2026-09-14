<template>
  <div class="azoth-calc" :class="{ dark }">
    <div class="ac-head">
      <div class="ac-title">
        <span>{{ t.title }}</span>
        <span class="ac-sub">{{ t.sub }}</span>
      </div>
      <div class="ac-lang">
        <button class="lang-btn" :class="{ on: lang === 'zh' }" @click="lang = 'zh'">中文</button>
        <button class="lang-btn" :class="{ on: lang === 'en' }" @click="lang = 'en'">English</button>
      </div>
    </div>

    <div class="ac-summary">
      <div class="sum-head">
        <span>{{ t.summary }}</span>
        <span class="sum-count">已选 {{ selCount }} / {{ items.length }} 项</span>
      </div>
      <div class="sum-icons">
        <div
          v-for="k in residKey"
          :key="k"
          class="sum-chip"
          :class="{ zero: totals[k] === 0 }"
        >
          <img class="sum-icon" :src="resIcon(k)" :alt="k" :title="resLabel(k)" />
          <span v-if="totals[k] > 0" class="sum-num">&times;{{ totals[k] }}</span>
          <span v-else class="sum-num dim">0</span>
          <span class="sum-name">{{ resLabel(k) }}</span>
        </div>
        <div class="sum-chip tc" :class="{ zero: totals.tc === 0 }">
          <span class="sum-tc">TC</span>
          <span class="sum-num" :class="{ dim: totals.tc === 0 }">&times;{{ totals.tc }}</span>
        </div>
      </div>
      <div class="sum-azoth">
        <span class="az-label">{{ t.azoth }}</span>
        <span class="az-value">{{ fmt(totals.azoth) }}</span>
      </div>
      <div class="sum-note">{{ t.note }}</div>
    </div>

    <div class="ac-table">
      <div v-for="reg in regions" :key="reg" class="ac-region">
        <div class="reg-head">
          <label class="reg-check">
            <input type="checkbox" :checked="regionAllOn(reg)" @change="toggleRegion(reg)" />
            <span>{{ regLabel(reg) }}</span>
          </label>
          <span class="reg-sub">{{ regionSub(reg) }}</span>
        </div>
        <div
          v-for="i in regionIndexes(reg)"
          :key="i"
          class="ac-row"
          :class="{ on: selected[i] }"
        >
          <label class="row-check">
            <input type="checkbox" v-model="selected[i]" />
            <span class="row-name">{{ items[i].name }}</span>
            <span class="row-phase">{{ items[i].phase }}</span>
          </label>
          <div class="row-res">
            <template v-if="rowRes(items[i]).length">
              <span v-for="r in rowRes(items[i])" :key="r.k" class="res-chip">
                <img class="res-icon" :src="resIcon(r.k)" :alt="r.k" :title="resLabel(r.k)" />
                &times;{{ r.v }}
              </span>
            </template>
            <span v-else class="res-chip tc-only">{{ t.tcOnly }}</span>
          </div>
          <span class="row-tc">TC &times;{{ items[i].tc }}</span>
          <span class="row-azoth">{{ fmt(rowAzoth(items[i])) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const REAGENT = "/subata/assets/db/reagents/";
const RES_KEY = ["elem", "sprt", "harm", "fire", "ice", "storm", "life", "death", "myth", "bal"];
const RES_ICON = {
  elem: "Reagent_Icon_Guild02_Elemental.png",
  sprt: "Reagent_Icon_Guild02_Spiritual.png",
  harm: "Reagent_Icon_Guild02_Harmonic.png",
  fire: "Reagent_Icon_Guild03_Fire.png",
  ice: "Reagent_Icon_Guild03_Ice.png",
  storm: "Reagent_Icon_Guild03_Storm.png",
  life: "Reagent_Icon_Guild03_Life.png",
  death: "Reagent_Icon_Guild03_Death.png",
  myth: "Reagent_Icon_Guild03_Myth.png",
  bal: "Reagent_Icon_Guild03_Balance.png",
};

const I18N = {
  zh: {
    title: "Azoth 材料计算器",
    sub: "勾选项目 · 汇总所需材料与 Azoth",
    summary: "选中项目所需材料汇总",
    azoth: "共需 Azoth（TC）：",
    note: "规则：TC 原值直接计入，单系材料（火/冰/风暴/生命/亡灵/神圣/平衡）每个 ×40，元素/精神/和谐每个 ×8",
    tcOnly: "仅 TC",
    region: {
      主岛: "主岛 (Main)",
      竞技场: "竞技场 (Arena)",
      战斗岛: "战斗岛 (Battle)",
      公会大厅: "公会大厅 (Guild Hall)",
    },
    res: {
      elem: "元素 Elemental",
      sprt: "精神 Spiritual",
      harm: "和谐 Harmonic",
      fire: "火 Fire",
      ice: "冰 Ice",
      storm: "风暴 Storm",
      life: "生命 Life",
      death: "亡灵 Death",
      myth: "神圣 Myth",
      bal: "平衡 Balance",
    },
  },
  en: {
    title: "Azoth Material Calculator",
    sub: "Check projects to sum materials & Azoth",
    summary: "Materials required for selected projects",
    azoth: "Total Azoth (TC):",
    note: "TC counted as-is; school materials (Fire/Ice/Storm/Life/Death/Myth/Balance) ×40 each; Elemental/Spiritual/Harmonic ×8 each",
    tcOnly: "TC only",
    region: {
      主岛: "Main",
      竞技场: "Arena",
      战斗岛: "Battle",
      公会大厅: "Guild Hall",
    },
    res: {
      elem: "Elemental",
      sprt: "Spiritual",
      harm: "Harmonic",
      fire: "Fire",
      ice: "Ice",
      storm: "Storm",
      life: "Life",
      death: "Death",
      myth: "Myth",
      bal: "Balance",
    },
  },
};

export default {
  name: "AzothCalc",
  data() {
    return {
      dark: false,
      lang: "zh",
      zhItems: [],
      enItems: [],
      selected: [],
      observer: null,
    };
  },
  computed: {
    t() {
      return I18N[this.lang];
    },
    items() {
      return this.lang === "en" ? this.enItems : this.zhItems;
    },
    residKey() {
      return RES_KEY;
    },
    regions() {
      const seen = [];
      for (const it of this.items) if (!seen.includes(it.region)) seen.push(it.region);
      return seen;
    },
    selCount() {
      return this.items.filter((it, i) => this.selected[i]).length;
    },
    totals() {
      const t = { tc: 0, azoth: 0 };
      for (const k of RES_KEY) t[k] = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (!this.selected[i]) continue;
        const it = this.items[i];
        t.tc += it.tc;
        for (const k of RES_KEY) t[k] += it[k] || 0;
      }
      const single = t.fire + t.ice + t.storm + t.life + t.death + t.myth + t.bal;
      const trio = t.elem + t.sprt + t.harm;
      t.azoth = t.tc + single * 40 + trio * 8;
      return t;
    },
  },
  methods: {
    fmt(n) {
      return n.toLocaleString("en-US");
    },
    resLabel(k) {
      return this.t.res[k];
    },
    resIcon(k) {
      return REAGENT + RES_ICON[k];
    },
    regLabel(reg) {
      return (this.t.region[reg] || reg) + (this.lang === "zh" ? "" : "");
    },
    regionIndexes(reg) {
      const arr = [];
      for (let i = 0; i < this.items.length; i++) if (this.items[i].region === reg) arr.push(i);
      return arr;
    },
    regionSub(reg) {
      const items = this.regionIndexes(reg);
      const idx = [];
      for (let i = 0; i < this.items.length; i++) if (this.items[i].region === reg) idx.push(i);
      const on = idx.filter((i) => this.selected[i]).length;
      const az = idx.filter((i) => this.selected[i]).reduce((s, i) => s + this.rowAzoth(this.items[i]), 0);
      return `${on}/${items.length} · ${this.fmt(az)}`;
    },
    regionAllOn(reg) {
      const items = this.regionIndexes(reg);
      if (!items.length) return false;
      return items.every((i) => this.selected[i]);
    },
    toggleRegion(reg) {
      const want = !this.regionAllOn(reg);
      for (let i = 0; i < this.items.length; i++)
        if (this.items[i].region === reg) this.selected[i] = want;
    },
    rowRes(it) {
      const arr = [];
      for (const k of RES_KEY) if (it[k] > 0) arr.push({ k, v: it[k] });
      return arr;
    },
    rowAzoth(it) {
      const single = it.fire + it.ice + it.storm + it.life + it.death + it.myth + it.bal;
      const trio = it.elem + it.sprt + it.harm;
      return (it.tc || 0) + single * 40 + trio * 8;
    },
    syncDark() {
      this.dark = document.documentElement.classList.contains("dark");
    },
  },
  async mounted() {
    this.syncDark();
    this.observer = new MutationObserver(() => this.syncDark());
    this.observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    try {
      const [zhR, enR] = await Promise.all([
        fetch("/subata/assets/azoth/zh.json"),
        fetch("/subata/assets/azoth/en.json"),
      ]);
      if (!zhR.ok || !enR.ok) throw new Error("HTTP " + zhR.status + "/" + enR.status);
      this.zhItems = await zhR.json();
      this.enItems = await enR.json();
      this.selected = this.zhItems.map(() => false);
    } catch (e) {
      console.error("AzothCalc load failed:", e);
    }
  },
  unmounted() {
    if (this.observer) this.observer.disconnect();
  },
};
</script>

<style lang="scss" scoped>
.azoth-calc {
  --az-border: var(--vp-c-divider);
  --az-text: var(--vp-c-text);
  --az-text-2: var(--vp-c-text-2);
  --az-bg: var(--vp-c-bg);
  --az-bg-alt: var(--vp-c-bg-alt);
  --az-ok: #18a058;
  --az-brand: var(--vp-c-brand);
  font-size: 14px;
  color: var(--az-text);
}

.dark {
  --az-ok: #63e2b7;
}

.ac-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.ac-title {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 17px;
  font-weight: 700;
  .ac-sub {
    font-size: 12px;
    font-weight: 400;
    color: var(--az-text-2);
  }
}
.ac-lang {
  display: flex;
  border: 1px solid var(--az-border);
  border-radius: 8px;
  overflow: hidden;
  .lang-btn {
    border: none;
    background: var(--az-bg);
    color: var(--az-text-2);
    padding: 5px 14px;
    cursor: pointer;
    font-size: 13px;
    &.on {
      background: var(--az-brand);
      color: #fff;
      font-weight: 600;
    }
  }
}

.ac-summary {
  border: 1px solid var(--az-border);
  border-radius: 10px;
  background: var(--az-bg);
  padding: 12px 14px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sum-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  .sum-count {
    font-weight: 400;
    color: var(--az-text-2);
    font-size: 12px;
  }
}
.sum-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.sum-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  border: 1px solid var(--az-border);
  border-radius: 8px;
  padding: 6px 8px;
  min-width: 64px;
  background: var(--az-bg-alt);
  &.zero {
    opacity: 0.45;
  }
  &.tc {
    flex-direction: row;
    align-items: center;
    min-width: auto;
    gap: 5px;
  }
}
.sum-icon {
  width: 34px;
  height: 34px;
  object-fit: contain;
  display: block;
}
.sum-tc {
  font-size: 15px;
  font-weight: 800;
  color: var(--az-brand);
}
.sum-num {
  font-size: 15px;
  font-weight: 700;
  &.dim {
    font-weight: 400;
    color: var(--az-text-2);
  }
}
.sum-name {
  font-size: 11px;
  color: var(--az-text-2);
  white-space: nowrap;
}
.sum-azoth {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px dashed var(--az-border);
  .az-label {
    font-size: 14px;
    font-weight: 600;
  }
  .az-value {
    font-size: 26px;
    font-weight: 800;
    color: var(--az-brand);
  }
}
.sum-note {
  font-size: 11px;
  color: var(--az-text-2);
}

.ac-table {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.ac-region {
  border: 1px solid var(--az-border);
  border-radius: 10px;
  overflow: hidden;
}
.reg-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: var(--az-bg-alt);
  border-bottom: 1px solid var(--az-border);
}
.reg-check {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  input {
    cursor: pointer;
  }
}
.reg-sub {
  font-size: 12px;
  color: var(--az-text-2);
}
.ac-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  border-bottom: 1px solid var(--az-border);
  &:last-child {
    border-bottom: none;
  }
  &.on {
    background: rgba(24, 160, 88, 0.06);
  }
}
.row-check {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  cursor: pointer;
  input {
    cursor: pointer;
    flex: none;
  }
}
.row-name {
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.row-phase {
  flex: none;
  font-size: 11px;
  color: var(--az-text-2);
  border: 1px solid var(--az-border);
  border-radius: 8px;
  padding: 0 6px;
  background: var(--az-bg);
}
.row-res {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex: none;
  max-width: 52%;
  justify-content: flex-end;
}
.res-chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  color: var(--az-text-2);
  .res-icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  &.tc-only {
    font-style: italic;
  }
}
.row-tc {
  flex: none;
  font-size: 12px;
  color: var(--az-text-2);
  white-space: nowrap;
}
.row-azoth {
  flex: none;
  min-width: 72px;
  text-align: right;
  font-size: 13px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 768px) {
  .ac-row {
    flex-wrap: wrap;
    .row-check {
      flex-basis: 100%;
    }
    .row-res {
      max-width: 100%;
      justify-content: flex-start;
    }
  }
}
</style>