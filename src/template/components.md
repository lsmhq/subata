---
# 标题-sideBar在shortTitle不设置时使用title的文本
title: 自定义组件
# sideBar标题
shortTitle: 组件
# 描述
description: 自定义组件
# 文章作者，不填，则会回退到默认作者
author: 蓝色灭火器
# 分类
category: 
  - 自定义组件
# 标签
tag: 
  - 教程
# 图标-详情请看：https://theme-hope.vuejs.press/zh/guide/interface/icon.html
icon: book
# 是否原创文章
isOriginal: true
# 写作时间
date: 2023-11-14
# 置顶-数字越大越靠上
sticky: 9
# 时间线
timeline: true
# 封面图
banner: /assets/background/1698762378210.jpg
#---下方的为md正文内容
---

## PopOver

### 样式

<p>
这是一个例子：
    <PopOver
        src="/images/empty.gif"
        text="图片"
        title="Empty"
        desc="Empty Lsmhq"
    >这是一个叫Empty.gif的图片，这里的内容可以自定义</PopOver>
</p>

### 代码展示

```md
<p>
这是一个例子：
    <PopOver
        src="/images/empty.gif"
        text="图片"
        title="Empty"
        desc="Empty Lsmhq"
    >这是一个叫Empty.gif的图片，这里的内容可以自定义</PopOver>
</p>
```

### 参数介绍

名称|类型|作用|默认值
-|-|-|-
src|String|图片路径|'/images/empty.gif'
text|String|文本内容|'Subata'
title|String|弹出卡片内的Title|'Subata'
desc|String|弹出卡片内的描述|'Lsmhq~'
trigger|'hover' \| 'click'|触发方式|'hover'

## Canculate 宠物计算器

### 样式

<Canculate />

### 代码展示

```md
<Canculate />
```

### 使用说明

宠物属性计算器，无需参数，直接使用即可。

- 拖动滑杆或直接在输入框中输入数值调整 力量/智力/敏捷性/意志/能量 五项属性
- 使用宝石下拉框可以快捷为当前属性 +25 / +40 / +60
- 右侧按类别展示各天赋技能在当前属性下的实际效果值
- 属性值会自动保存在本地浏览器，下次打开自动恢复
- 顶部可以调整结果保留的小数位数（2~5 位）

## Quiz 皇冠答题

### 样式

<Quiz />

### 代码展示

```md
<Quiz />
```

### 使用说明

皇冠答题助手，无需参数，直接使用即可。

- **题库对照**：内置官方 Trivia 全部题目，支持关键词搜索，点击条目即可查看答案
- **油猴脚本**：一键复制编译好的 UserScript，装进 Tampermonkey 后在官方答题页面自动漂浮显示答案与进度
- **安装教程**：步骤化引导安装油猴脚本

## PackSimulator 卡包抽卡

### 样式

<PackSimulator />

### 代码展示

```md
<PackSimulator />
```

### 使用说明

卡包抽卡模拟器，无需参数，直接使用即可。

- 内置 18 个常驻卡包及各自特色掉落，选定卡包扣除 399 皇冠开包
- 模拟官方卡包结构：每包开出 **7 件随机物品**，多为药水/零食/法术卡/家具等普通产出，偶尔出现坐骑、宠物、技能碎片、外观
- 按社区实测量身定制掉率：**永久坐骑约 1%/包**（0.5%～1.5%，平均 70–200 包一只）、**卡包限定宠物约 3%**、**毕业套装单件约 5%**、**限时坐骑约 13%**，卡片会带翻面特效依次揭开
- 页面内置掉率参考面板，可对照每次开包结果感受真实出货节奏；具体数值为社区估算，不代表官方数值
- 背包记录当前卡包独特物品的集齐进度和开包次数，数据自动保存在本地浏览器
- 卡包物品预留 `image` 字段，后续把对应图片放入 `public/assets/pack/` 并填写字段即可展示图片

## ItemsDb 物品图鉴

### 样式

<ItemsDb />

### 代码展示

```md
<ItemsDb />
```

### 使用说明

Wizard101 全物品图鉴检索页，无需参数，直接使用即可。

- 内置约 2.6 万件物品数据（长袍 / 帽子 / 靴子 / 魔杖 / 卡组 / 戒指 / 匕首 / 护符 / 坐骑）
- 支持名称搜索（空格分隔多关键词）、类型、系别、等级范围、交易标记多条件筛选，分页浏览
- 点击条目展开详情：属性列表、武器卡（紫色）、交易标记（橙色）、物品 ID、一键复制名称
- 数据提取自官方游戏客户端（Root.wad 快照，约 2021 年 6 月），页面已标注；此数据文件仅作查询参考
- 数据文件位于 `public/assets/items-db/items.json`，由 `scripts/build-items-db.mjs` 生成；后续使用官方最新 Root.wad 解包数据可直接替换该文件升级，组件无需改动
