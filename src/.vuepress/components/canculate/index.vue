<template>
  <n-config-provider :theme="dark ? darkTheme : null">
    <div class="canculate">
      <div class="tofixed-group">
        <span>小数位数</span>
        <n-button size="small" quaternary circle @click="changeFixed(-1)">−</n-button>
        <n-input-number
          class="tofixed-input"
          v-model:value="toFixed"
          :min="2"
          :max="5"
          size="small"
        />
        <n-button size="small" quaternary circle @click="changeFixed(1)">＋</n-button>
      </div>

      <div class="attr-list">
        <div class="attr-row" v-for="(item, index) in data" :key="item.name">
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <img class="attr-icon" :src="petIcon(item)" alt="" />
            </template>
            {{ item.name }}:{{ item.zh_name }}
          </n-tooltip>
          <span class="attr-name">{{ item.zh_name }}</span>
          <n-input-number
            class="attr-input"
            v-model:value="attr[index]"
            :min="0"
            :max="item.max"
            size="small"
          />
          <n-select
            class="attr-gem"
            size="small"
            :value="gemSelect"
            :options="gemOptions"
            placeholder="宝石"
            @update:value="onGem(index, $event)"
          />
          <n-slider
            class="attr-range"
            v-model:value="attr[index]"
            :min="0"
            :max="item.max"
            :step="1"
          />
        </div>
      </div>

      <div class="result-wrap">
        <n-card
          v-for="group in data_right"
          :key="group.type"
          class="result-col"
          size="small"
          :title="group.type"
        >
          <template #header>
            <div class="result-title">
              <img v-if="groupIconUrl(group)" class="group-icon" :src="groupIconUrl(group)" alt="" />
              <span>{{ group.type }}</span>
            </div>
          </template>
          <ul>
            <li v-for="item in group.children" :key="item.name">
              <span class="result-icon">
                <img
                  v-for="ic in icons(item, group)"
                  :key="ic"
                  :src="ic"
                  class="spell-icon"
                  alt=""
                />
              </span>
              <n-tooltip placement="top" trigger="hover">
                <template #trigger>
                  <span class="result-name">{{ item.zh_name }}</span>
                </template>
                {{ item.name }}
              </n-tooltip>
              <span class="result-value">{{ calculateGs(item, attr, toFixed) }}{{ group.unit }}</span>
            </li>
          </ul>
        </n-card>
      </div>
    </div>
  </n-config-provider>
</template>

<script>
import {
  NButton,
  NCard,
  NConfigProvider,
  NInputNumber,
  NSelect,
  NSlider,
  NTooltip,
  darkTheme,
} from "naive-ui";
import calculate from "./calculate.json";

export default {
  name: "Canculate",
  components: {
    NButton,
    NCard,
    NConfigProvider,
    NInputNumber,
    NSelect,
    NSlider,
    NTooltip,
  },
  data() {
    const KEY = "subata_calculate_attr";
    const hasStorage = typeof localStorage !== "undefined";
    let saved = null;
    try {
      saved = hasStorage ? JSON.parse(localStorage.getItem(KEY)) : null;
    } catch (e) {
      saved = null;
    }
    const attr = Array.isArray(saved) && saved.length === calculate.data.length
      ? saved
      : calculate.data.map(() => 0);
    return {
      darkTheme,
      dark: false,
      data: calculate.data,
      data_right: calculate.data_right,
      attr,
      toFixed: 3,
      gemSelect: null,
      gemOptions: [
        { label: "无", value: 0 },
        { label: "+25", value: 25 },
        { label: "+40", value: 40 },
        { label: "+60", value: 60 },
      ],
      storageKey: KEY,
      observer: null,
    };
  },
  methods: {
    petIcon(item) {
      return `/subata/assets/icon/Icon_Pet_${item.name}.png`;
    },
    iconUrl(key) {
      return key ? `/subata/assets/icon/${key}.png` : "";
    },
    groupIconKeys(group) {
      if (!group.icon) return [];
      return Array.isArray(group.icon) ? group.icon : [group.icon];
    },
    groupIconUrl(group) {
      const keys = this.groupIconKeys(group);
      return keys.length ? this.iconUrl(keys[0]) : "";
    },
    icons(item, group) {
      const key = item.icon || group.icon || "";
      if (!key) return [];
      const keys = Array.isArray(key) ? key : [key];
      return keys.map((k) => this.iconUrl(k));
    },
    onGem(index, value) {
      this.gemSelect = null;
      if (value) this.quick(index, value);
    },
    quick(index, delta) {
      const value = Math.min(this.data[index].max, Math.max(0, this.attr[index] + delta));
      this.attr[index] = value;
      this.save();
    },
    changeFixed(delta) {
      this.toFixed = Math.min(5, Math.max(2, this.toFixed + delta));
    },
    calculateGs(item, attr, toFixed) {
      const { x, y, z, de, type } = item;
      const xValue = attr[x];
      const yValue = attr[y];
      const zValue = attr[z];
      switch (type) {
        case 1:
          return ((2 * xValue + 2 * yValue + zValue) / de).toFixed(toFixed);
        case 2:
          return ((2 * xValue + 2 * yValue + zValue) * 3 / de).toFixed(toFixed);
        case 3:
          return ((2 * xValue + 2 * yValue + zValue) * 9 / de).toFixed(toFixed);
        default:
          return "1";
      }
    },
    save() {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(this.storageKey, JSON.stringify(this.attr));
      }
    },
    syncDark() {
      this.dark = document.documentElement.classList.contains("dark");
    },
  },
  mounted() {
    this.syncDark();
    this.observer = new MutationObserver(() => this.syncDark());
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    this.beforeUnload = () => this.save();
    window.addEventListener("beforeunload", this.beforeUnload);
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.beforeUnload);
    if (this.observer) this.observer.disconnect();
  },
};
</script>

<style lang="scss" scoped>
.canculate {
  width: 100%;
  overflow-x: hidden;
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;

  ul,
  li {
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .tofixed-group {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 33px;
    margin-bottom: 15px;
    font-size: 14px;

    .tofixed-input {
      width: 90px;
    }
  }

  .attr-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .attr-row {
    display: flex;
    align-items: center;
    gap: 8px;

    .attr-icon {
      flex: none;
      cursor: pointer;
      width: 25px;
      display: block;
    }

    .attr-name {
      width: 60px;
      flex: none;
      font-size: 15px;
    }

    .attr-input {
      width: 110px;
      flex: none;
    }

    .attr-gem {
      width: 90px;
      flex: none;
    }

    .attr-range {
      flex: 1;
      min-width: 80px;
    }
  }

  .result-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    margin-top: 20px;
  }

  .result-col {
    .result-title {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: bold;
      font-size: 16px;
      .group-icon {
        width: 20px;
      }
    }

    li {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 2px 0;

      .result-icon {
        display: inline-flex;
        gap: 2px;
        flex: none;
        .spell-icon {
          width: 18px;
        }
      }

      .result-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 13px;
      }

      .result-value {
        font-weight: bold;
        font-size: 14px;
        flex: none;
      }
    }
  }

  @media (max-width: 768px) {
    .attr-row {
      flex-wrap: wrap;

      .attr-range {
        flex-basis: 100%;
        order: 5;
      }
    }
  }
}
</style>