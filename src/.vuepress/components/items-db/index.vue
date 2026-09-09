<template>
  <n-config-provider :theme="dark ? darkTheme : null">
    <div class="items-db">
      <div class="db-meta">
        <span>Wizard101 物品图鉴 · 全量 {{ total }} 件</span>
        <span class="db-note">数据提取自游戏客户端（Root.wad 快照，约 2021 年 6 月）。已内置搜索、筛选与分页。</span>
      </div>

      <div class="toolbar">
        <n-input
          v-model:value="keyword"
          clearable
          size="small"
          placeholder="搜索名称 / 系别 / 类型（空格分隔多关键词）"
          style="width: 320px"
        />
        <n-select
          v-model:value="typeSel"
          multiple
          size="small"
          clearable
          placeholder="类型"
          :options="typeOptions"
          style="width: 220px"
        />
        <n-select
          v-model:value="schoolSel"
          multiple
          size="small"
          clearable
          placeholder="系别"
          :options="schoolOptions"
          style="width: 200px"
        />
        <n-select
          v-model:value="flagSel"
          multiple
          size="small"
          clearable
          placeholder="交易标记"
          :options="flagOptions"
          style="width: 200px"
        />
        <n-switch v-model:value="showTest" size="small">
          <template #checked>显示测试物品</template>
          <template #unchecked>隐藏测试物品</template>
        </n-switch>
      </div>

      <div class="toolbar level-row">
        <span class="lv-label">等级范围</span>
        <n-slider
          v-model:value="levelRange"
          :min="levelBounds[0]"
          :max="levelBounds[1]"
          :step="1"
          range
          :default-value="levelBounds"
          style="width: 320px; margin: 0 12px"
        />
        <n-tag size="small" :bordered="false" type="info">{{ levelRange[0] }} ~ {{ levelRange[1] }}</n-tag>
      </div>

      <div class="result-info">
        匹配 {{ filtered.length }} 件
        <n-button size="tiny" quaternary @click="reset">重置筛选</n-button>
      </div>

      <div v-if="loading" class="center-box">正在加载物品数据…</div>
      <div v-else-if="error" class="center-box error">{{ error }}</div>

      <template v-else>
        <div class="item-list">
          <div v-for="item in pageItems" :key="item.id + item.name" class="item-card" :class="{ open: open === item }">
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
                <n-button
                  size="tiny"
                  quaternary
                  type="primary"
                  @click.stop="copyName(item)"
                >{{ copied === item ? "已复制" : "复制名称" }}</n-button>
              </div>
              <ul class="stat-list">
                <li
                  v-for="(line, i) in item.lines"
                  :key="i"
                  :class="{ 'is-card': item.cards.includes(line), 'is-flag': item.flags.includes(line) }"
                >
                  {{ line }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div v-if="filtered.length === 0" class="center-box empty">没有匹配的物品，换个条件试试</div>

        <n-pagination
          v-if="pageCount > 1"
          v-model:page="page"
          :page-count="pageCount"
          :page-size="pageSize"
          size="small"
          style="margin-top: 16px; justify-content: center"
        />
      </template>
    </div>
  </n-config-provider>
</template>

<script>
import {
  NButton,
  NConfigProvider,
  NInput,
  NPagination,
  NSelect,
  NSlider,
  NSwitch,
  NTag,
  darkTheme,
} from "naive-ui";

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

export default {
  name: "ItemsDb",
  components: {},
  setup() {
    return { darkTheme, schoolCN: SCHOOL_CN, typeCN: TYPE_CN, flagCN: FLAG_CN };
  },
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
      levelRange: [0, 200],
      levelBounds: [0, 200],
      page: 1,
      pageSize: 50,
      open: null,
      copied: null,
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
        if (it.level != null && (it.level < this.levelRange[0] || it.level > this.levelRange[1])) return false;
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
        this.levelRange = [min, max];
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
      this.levelRange = [this.levelBounds[0], this.levelBounds[1]];
      this.page = 1;
      this.open = null;
    },
  },
  mounted() {
    this.dark = document.documentElement.classList.contains("dark");
    this.load();
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
  gap: 8px;
  margin-bottom: 8px;
}
.level-row {
  align-items: center;
}
.lv-label {
  font-size: 13px;
  color: var(--vp-c-text-2);
}
.result-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0 10px;
  font-size: 13px;
  color: var(--vp-c-text-2);
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
.stat-list .is-card {
  color: #9c27b0;
  font-weight: 500;
}
.stat-list .is-flag {
  color: #f08200;
}
</style>