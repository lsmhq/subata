<template>
  <div class="items-db" :class="{ dark }">
    <div class="db-meta">
      <span>Wizard101 物品图鉴 · 全量 {{ total }} 件</span>
      <span class="db-note">数据提取自游戏客户端（Root.wad 快照，约 2021 年 6 月）。已内置搜索、筛选与分页。</span>
    </div>

    <div class="toolbar">
      <input
        class="kw"
        v-model="keyword"
        placeholder="搜索名称 / 系别 / 类型（空格分隔多关键词）"
      />
      <label class="chk">
        <input type="checkbox" v-model="showTest" />
        显示测试物品
      </label>
    </div>

    <div class="filters">
      <div class="fgroup">
        <div class="fg-title">类型</div>
        <div class="chips">
          <button
            v-for="t in typeOptions"
            :key="t.value"
            class="chip"
            :class="{ on: typeSel.includes(t.value) }"
            @click="toggleIn(typeSel, t.value)"
          >{{ t.label }}</button>
        </div>
      </div>
      <div class="fgroup">
        <div class="fg-title">系别</div>
        <div class="chips">
          <button
            v-for="s in schoolOptions"
            :key="s.value"
            class="chip"
            :class="{ on: schoolSel.includes(s.value) }"
            @click="toggleIn(schoolSel, s.value)"
          >{{ s.label }}</button>
        </div>
      </div>
      <div class="fgroup" v-if="flagOptions.length">
        <div class="fg-title">交易标记</div>
        <div class="chips">
          <button
            v-for="f in flagOptions"
            :key="f.value"
            class="chip"
            :class="{ on: flagSel.includes(f.value) }"
            @click="toggleIn(flagSel, f.value)"
          >{{ f.label }}</button>
        </div>
      </div>
      <div class="fgroup level">
        <div class="fg-title">等级范围</div>
        <div class="level-bar">
          <input
            type="range"
            :min="levelBounds[0]"
            :max="Math.max(levelBounds[0], levelBounds[1] - 1)"
            v-model.number="lmin"
          />
          <input
            type="range"
            :min="Math.min(levelBounds[0] + 1, levelBounds[1])"
            :max="levelBounds[1]"
            v-model.number="lmax"
          />
          <span class="lv-text">Lv{{ lmin }} ~ {{ lmax }}</span>
        </div>
      </div>
    </div>

    <div class="result-info">
      匹配 {{ filtered.length }} 件
      <button class="link-btn" @click="reset">重置筛选</button>
    </div>

    <div v-if="loading" class="center-box">正在加载物品数据…</div>
    <div v-else-if="error" class="center-box error">{{ error }}</div>

    <template v-else>
      <div class="item-list">
        <div
          v-for="item in pageItems"
          :key="(item.id || item.name) + item.name"
          class="item-card"
          :class="{ open: open === item }"
        >
          <div class="item-head" @click="toggle(item)">
            <span v-if="item.test" class="test-badge" title="开发测试物品">TEST</span>
            <span class="item-name">{{ item.name }}</span>
            <span v-if="item.school" class="school-tag" :class="'s-' + item.school">{{ schoolCN[item.school] }}</span>
            <span class="type-tag">{{ typeCN[item.type] || item.type }}</span>
            <span class="lv-tag">{{ item.level == null ? "--" : "Lv" + item.level }}</span>
            <span v-for="f in item.flags" :key="f" class="flag-tag">{{ flagCN[f] || f }}</span>
            <span class="item-arrow">{{ open === item ? "收起" : "详情" }}</span>
          </div>
          <div v-if="open === item" class="item-detail">
            <div class="detail-meta">
              <span v-if="item.id">ID: {{ item.id }}</span>
              <span v-if="item.school">系别：{{ schoolCN[item.school] }}</span>
              <span v-if="item.level != null">需求等级：{{ item.level }}</span>
              <button class="copy-btn" @click.stop="copyName(item)">{{ copied === item ? "已复制" : "复制名称" }}</button>
            </div>
            <ul class="stat-list">
              <li
                v-for="(line, i) in item.lines"
                :key="i"
                :class="{ 'is-card': item.cards.includes(line), 'is-flag': item.flags.includes(line) }"
              >
                <img v-if="statIcon(line)" class="stat-icon" :src="statIcon(line)" alt="" />
                <span>{{ line }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div v-if="filtered.length === 0" class="center-box empty">没有匹配的物品，换个条件试试</div>

      <div v-if="pageCount > 1" class="pager">
        <button class="page-btn" :disabled="page <= 1" @click="page--">上一页</button>
        <span class="page-now">第 {{ page }} / {{ pageCount }} 页</span>
        <button class="page-btn" :disabled="page >= pageCount" @click="page++">下一页</button>
      </div>
    </template>
  </div>
</template>

<script>
const TYPE_CN = {
  Robe: "长袍",
  Hat: "帽子",
  Boots: "靴子",
  Wand: "魔杖",
  Deck: "卡组",
  Ring: "戒指",
  Athame: "匕首",
  Amulet: "护符",
  Mount: "坐骑",
};

const SCHOOL_CN = {
  Fire: "火",
  Storm: "暴风",
  Ice: "冰",
  Balance: "平衡",
  Death: "死亡",
  Life: "生命",
  Myth: "幻影",
  Sun: "太阳",
  Moon: "月亮",
  Star: "星星",
  Shadow: "暗影",
};

const FLAG_CN = {
  "Crowns Only": "仅皇冠",
  "No Auction": "不可拍卖",
  "No Trade": "不可交易",
  "No Gift": "不可赠送",
  "No Sell": "不可出售",
  "No Bargain": "不可议价",
  Retired: "已绝版",
  "No Dye": "不可染色",
};

const DATA_URL = "/subata/assets/items-db/items.json";

const ICON_MAP = [
  { re: /\bPip\b|Power Pips/, key: "Type_PowerPips" },
  { re: /Critical/, key: "Icon_CriticalRating" },
  { re: /Block/, key: "Icon_BlockRating" },
  { re: /Pierce|Armor Penetration/, key: "Icon_Armor_Penetration" },
  { re: /Accuracy/, key: "Icon_Accuracy" },
  { re: /Stun/, key: "Icon_Stun_Resist" },
  { re: /Damage/, key: "Type_Damage" },
  { re: /Resist/, key: "Type_Resist" },
  { re: /Incoming/, key: "Type_Incoming" },
  { re: /Outgoing/, key: "Type_Outgoing" },
  { re: /Max Health|Health/, key: "Type_MaxHealth" },
  { re: /Max Mana|Mana/, key: "Type_MaxMana" },
  { re: /Heal/, key: "Type_Heal" },
];

export default {
  name: "ItemsDb",
  data() {
    return {
      dark: false,
      items: [],
      loading: true,
      error: "",
      keyword: "",
      typeSel: [],
      schoolSel: [],
      flagSel: [],
      showTest: false,
      lmin: 0,
      lmax: 200,
      levelBounds: [0, 200],
      page: 1,
      pageSize: 50,
      open: null,
      copied: null,
      schoolCN: SCHOOL_CN,
      typeCN: TYPE_CN,
      flagCN: FLAG_CN,
    };
  },
  computed: {
    typeOptions() {
      return this.typeCount.map((t) => ({ label: `${TYPE_CN[t[0]] || t[0]} (${t[1]})`, value: t[0] }));
    },
    schoolOptions() {
      return [
        ...this.schoolCount.map((s) => ({ label: `${SCHOOL_CN[s[0]] || s[0]} (${s[1]})`, value: s[0] })),
        { label: `通用 (${this.noSchool})`, value: "__none__" },
      ];
    },
    flagOptions() {
      return this.flagCount.map((f) => ({ label: `${FLAG_CN[f[0]] || f[0]} (${f[1]})`, value: f[0] }));
    },
    typeCount() {
      const m = new Map();
      this.items.forEach((i) => {
        if (this.showTest || !i.test) m.set(i.type, (m.get(i.type) || 0) + 1);
      });
      return [...m.entries()].filter((e) => e[0] !== "Unknown").sort((a, b) => b[1] - a[1]);
    },
    schoolCount() {
      const m = new Map();
      this.items.forEach((i) => {
        if ((this.showTest || !i.test) && i.school) m.set(i.school, (m.get(i.school) || 0) + 1);
      });
      return [...m.entries()].sort((a, b) => b[1] - a[1]);
    },
    noSchool() {
      return this.items.reduce((n, i) => n + ((this.showTest || !i.test) && !i.school ? 1 : 0), 0);
    },
    flagCount() {
      const m = new Map();
      this.items.forEach((i) => {
        if (!this.showTest && i.test) return;
        i.flags.forEach((f) => m.set(f, (m.get(f) || 0) + 1));
      });
      return [...m.entries()].sort((a, b) => b[1] - a[1]);
    },
    total() {
      return this.showTest ? this.items.length : this.items.filter((i) => !i.test).length;
    },
    filtered() {
      const kw = this.keyword.trim().toLowerCase();
      const words = kw ? kw.split(/\s+/) : [];
      return this.items.filter((it) => {
        if (!this.showTest && it.test) return false;
        if (this.typeSel.length && !this.typeSel.includes(it.type)) return false;
        const schoolMatch = this.schoolSel.length ? this.schoolSel.includes(it.school || "__none__") : true;
        if (!schoolMatch) return false;
        if (this.flagSel.length && !this.flagSel.some((f) => it.flags.includes(f))) return false;
        if (words.length) {
          const hay = [it.name, it.type, SCHOOL_CN[it.school], it.school].filter(Boolean).join(" ").toLowerCase();
          if (!words.every((w) => hay.includes(w))) return false;
        }
        if (it.level != null && (it.level < this.lmin || it.level > this.lmax)) return false;
        return true;
      });
    },
    pageCount() {
      return Math.max(1, Math.ceil(this.filtered.length / this.pageSize));
    },
    pageItems() {
      if (this.page > this.pageCount) this.page = 1;
      const start = (this.page - 1) * this.pageSize;
      return this.filtered.slice(start, start + this.pageSize);
    },
  },
  methods: {
    toggleIn(arr, value) {
      const i = arr.indexOf(value);
      if (i >= 0) arr.splice(i, 1);
      else arr.push(value);
    },
    statIcon(line) {
      for (const { re, key } of ICON_MAP) {
        if (re.test(line)) return `/subata/assets/icon/${key}.png`;
      }
      return "";
    },
    async load() {
      this.loading = true;
      try {
        const res = await fetch(DATA_URL);
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        this.items = data.items || [];
        if (!this.items.length) throw new Error("data empty");
        const lv = this.items.map((i) => (i.level == null ? 0 : i.level));
        const min = Math.min(...lv);
        const max = Math.max(...lv);
        this.levelBounds = [min, Math.max(max, min + 1)];
        this.lmin = min;
        this.lmax = max;
      } catch (e) {
        this.error = "物品数据加载失败：" + e.message;
      } finally {
        this.loading = false;
      }
    },
    toggle(item) {
      this.open = this.open === item ? null : item;
    },
    async copyName(item) {
      try {
        await navigator.clipboard.writeText(item.name);
        this.copied = item;
      } catch {
        this.copied = null;
      }
    },
    reset() {
      this.keyword = "";
      this.typeSel = [];
      this.schoolSel = [];
      this.flagSel = [];
      this.showTest = false;
      this.lmin = this.levelBounds[0];
      this.lmax = this.levelBounds[1];
      this.page = 1;
      this.open = null;
    },
    syncDark() {
      this.dark = document.documentElement.classList.contains("dark");
    },
  },
  mounted() {
    this.syncDark();
    this._observer = new MutationObserver(() => this.syncDark());
    this._observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    this.load();
  },
  unmounted() {
    if (this._observer) this._observer.disconnect();
  },
};
</script>

<style scoped>
.items-db {
  display: flex;
  flex-direction: column;
}
.db-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 12px;
  font-size: 13px;
}
.db-note {
  color: var(--vp-c-text-2);
}
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.kw {
  width: 320px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
  font-size: 13px;
  outline: none;
}
.kw:focus {
  border-color: var(--vp-c-brand);
}
.chk {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  user-select: none;
}
.filters {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 8px 10px;
}
.fgroup {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.fg-title {
  flex: none;
  min-width: 72px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 600;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
  border-radius: 12px;
  padding: 2px 10px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s;
}
.chip:hover {
  border-color: var(--vp-c-brand);
}
.chip.on {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  color: #fff;
}
.fgroup.level {
  flex-wrap: wrap;
}
.level-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 260px;
}
.level-bar input[type="range"] {
  flex: 1;
  min-width: 80px;
  accent-color: var(--vp-c-brand);
}
.lv-text {
  flex: none;
  font-size: 12px;
  color: var(--vp-c-brand);
  white-space: nowrap;
}
.result-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0 10px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
.link-btn,
.copy-btn {
  border: none;
  background: transparent;
  color: var(--vp-c-brand);
  font-size: 13px;
  cursor: pointer;
  padding: 0;
}
.link-btn:hover,
.copy-btn:hover {
  text-decoration: underline;
}
.center-box {
  padding: 32px 0;
  text-align: center;
  color: var(--vp-c-text-2);
}
.center-box.error {
  color: #d03050;
}
.item-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.item-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.15s;
}
.item-card:hover,
.item-card.open {
  border-color: var(--vp-c-brand);
}
.item-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
}
.item-name {
  font-weight: 600;
  font-size: 14px;
}
.test-badge {
  background: #d03050;
  color: #fff;
  border-radius: 3px;
  font-size: 10px;
  padding: 0 4px;
}
.school-tag,
.type-tag,
.lv-tag,
.flag-tag {
  font-size: 12px;
  padding: 1px 7px;
  border-radius: 10px;
}
.school-tag {
  background: #2080f0;
  color: #fff;
}
.type-tag {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.lv-tag {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-brand);
}
.flag-tag {
  background: rgba(255, 127, 0, 0.12);
  color: #f08200;
  border: 1px solid rgba(255, 127, 0, 0.35);
}
.s-Fire {
  background: #d03050;
}
.s-Storm {
  background: #2080f0;
}
.s-Ice {
  background: #63b3c4;
}
.s-Balance {
  background: #e0c000;
  color: #333;
}
.s-Death {
  background: #666;
}
.s-Life {
  background: #18a058;
}
.s-Myth {
  background: #9c27b0;
}
.item-arrow {
  margin-left: auto;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.item-arrow:hover {
  color: var(--vp-c-brand);
}
.item-detail {
  border-top: 1px dashed var(--vp-c-divider);
  padding: 10px 12px;
}
.detail-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.stat-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 13px;
}
.stat-list li {
  display: flex;
  align-items: center;
  gap: 6px;
}
.stat-icon {
  width: 16px;
  height: 16px;
  flex: none;
}
.stat-list .is-card {
  color: #9c27b0;
  font-weight: 500;
}
.stat-list .is-flag {
  color: #f08200;
}
.pager {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}
.page-btn {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
  border-radius: 6px;
  padding: 4px 14px;
  font-size: 13px;
  cursor: pointer;
}
.page-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}
.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.page-now {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .kw {
    width: 100%;
  }
  .toolbar {
    align-items: stretch;
  }
  .filters {
    padding: 6px 8px;
  }
  .fgroup {
    align-items: flex-start;
  }
  .fgroup.level {
    flex-direction: column;
    gap: 4px;
  }
  .level-bar {
    min-width: 0;
    width: 100%;
  }
  .level-bar input[type="range"] {
    min-width: 40px;
  }
  .item-head {
    gap: 4px;
    padding: 8px;
  }
  .item-name {
    font-size: 13px;
  }
  .school-tag,
  .type-tag,
  .lv-tag,
  .flag-tag {
    font-size: 11px;
    padding: 0 6px;
  }
  .item-arrow {
    font-size: 11px;
  }
  .item-detail {
    padding: 8px;
  }
  .stat-list {
    font-size: 12px;
  }
  .pager {
    gap: 8px;
  }
}
</style>