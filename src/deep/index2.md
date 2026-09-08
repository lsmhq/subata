---
title: Wizard101 策略博弈系统（Rhoshambo）法术详解
shortTitle: 策略博弈系统
description: Wizard101 中以状态博弈为核心的法术体系，涵盖蓄势（Ramp）与险棋（Gambit）两类设计及完整法术列表
author: finalbastion 布雷兹（翻译）
category:
  - Wizard101
  - 法术机制
tag:
  - 策略博弈
  - 蓄势
  - 险棋
order: 1

---


## 📌 系统总览

<Badge type="tip" text="系统总称" />

**策略博弈系统（Rhoshambo System）** 是 Wizard101 中的一套以“状态博弈与条件判定”为核心的法术体系。  
这一机制原本是在 PvP 中引入的“剪刀石头布”式设计，如今已被纳入标准 PvE、挑战模式、团本与 PvP 中使用，其核心是：

> **通过已有状态的存在、清除或转化，来满足条件并触发更高收益的效果**。<grok-card data-id="1c0f1e" data-type="citation_card" data-plain-type="render_inline_citation" ></grok-card><grok-card data-id="f0a998" data-type="citation_card" data-plain-type="render_inline_citation" ></grok-card>

体系主要由两类法术组成：

- **蓄势（Ramp）**：通过清除或转化状态来铺垫优势  
- **险棋（Gambit）**：在特定状态满足时触发强化效果，未满足时仅结算基础效果  

![系统总览](image.png)![系别对应](image-1.png)
## 🧠 设计理念

策略博弈系统强调**“先铺垫，再兑现”**，鼓励玩家通过状态管理与条件判断来取得战斗优势。

该机制强调：

- **回合规划与节奏控制**  
- **状态资源的管理与交换**  
- **法术之间的协同与分工**  

🔁 **蓄势（Ramp）** <Badge type="info" text="准备型机制" /> 

蓄势（Ramp） 是策略博弈系统中的**铺垫与博弈核心**。  
这类法术主要通过**清除或转化现存状态**（如咒符、结界等）来生成对己方有利的状态，以便在后续回合创造更好条件，形成**此消彼长**的动态对抗——宛如石头剪刀布，一个学派的铺垫可被对手反制或利用。

**典型博弈示例**（神话 vs 生命）：

| 步骤 | 施法者 | 法术 | 效果 | 状态变化 |
|------|--------|------|------|----------|
| 1. 神话铺垫 | 神话 | **背叛（Betrayal）**<br>Lv50 / 2魔豆 | 移除敌人**有益结界** → 每1个加**+35%神话陷阱**（负面） | 敌人：-盾 +陷阱（易神话伤） |
| 2. 生命反制 | 生命 | **宁静（Tranquility）**<br>Lv50 / 2魔豆 | 移除敌人**有害结界**（陷阱） → 每1个给己方**145 HOT/5回合** | 敌人：-陷阱<br>己方：+HOT（回血） |

::: note
蓄势重在**“状态转化与铺垫”**，而非简单强化。它驱动**Rhoshambo轮**（Life > Myth > Death > Life），鼓励预测对手、资源交换，实现高阶策略深度。
:::
:::

🎯 **险棋（Gambit）** <Badge type="warning" text="判定型机制" /> 

险棋（Gambit） 是策略博弈系统中条件判定机制的一部分：

若目标身上存在指定状态，则法术触发强化效果；否则只结算基础效果或失败。

这一机制增强了状态的重要性，使法术收益与战场状态密切相关。<grok-card data-id="10358e" data-type="citation_card" data-plain-type="render_inline_citation" ></grok-card>

::: tabs
@tab:active 判定流程

1. 施放带有险棋条件的法术  
2. 系统检查目标身上是否存在指定状态  
3. 条件满足 → 触发强化效果  
4. 条件不满足 → 仅结算基础或无强化效果  

@tab 可判定状态

- 🟦 **咒符（Charm）**  
- 🟩 **结界（Ward）**  
- ⚔️ **刀刃（Blade）**  
- 🔥 **DOT（持续伤害）**  
- 💚 **HOT（持续治疗）**  

@tab 险棋可触发效果的法术条件

- 通常需要 **4 个悬挂效果** 或 **2 个 DOT + 1 个 HOT**  
- 施放时需确保目标状态满足条件，否则效果无法最大化  

@tab 额外可判定状态

- 🧞 **灯神（Jinn）**  
- 🐘 **魔象（Oni）**  
- 🌳 **大树（Scion）**  
:::

:::

::: warning
险棋并非稳定输出机制，而是高风险高回报的终结型选择。
:::

### 🔗 蓄势 × 险棋 协同

协同机制  
蓄势负责构建状态铺垫，险棋负责在条件满足时收割战局；两者共同构成策略博弈系统的核心循环。  

典型战术流程：

1. 蓄势法术创建或转化状态  
2. 维持并调整状态资源  
3. 使用险棋法术在最优时机触发强化效果  
## 🌀 RSB 基础状态与克制轮详解

<Badge type="tip" text="Rhoshambo 核心逻辑" />

**策略博弈（RSB）** 的精髓在于**6系大循环 + 平衡万能**：每个学派有**核心状态**，通过 Ramp（蓄势）**转化/交换**，Gambit（险棋）**条件判定**，形成**石头剪刀布**式博弈。

### 📊 1. 基础状态表
每个学派的核心“资源”，Ramp 负责铺垫/转化，Gambit 依赖它触发大招。

| 学派   | 核心状态     | 作用简述                  |
|--------|--------------|---------------------------|
| **亡灵 (Death)** | **虚弱 (Weakness)** | -伤害 debuff，削弱敌人输出 |
| **风暴 (Storm)** | **刃 (Blade)**     | +伤害 buff，放大输出 |
| **生命 (Life)**  | **HOT**            | 持续回血，增强生存        |
| **火焰 (Fire)**  | **DOT**            | 持续伤害，积累输出        |
| **神圣 (Myth)**  | **陷阱 (Trap)**    | +伤害陷阱（负面结界）     |
| **冰霜 (Ice)**   | **盾牌 (Shield)**  | 吸收伤害，防御核心        |
| **平衡 (Balance)** | **一切（弱化版）** | 可转化任意状态，但效果减半 |

::: note
**平衡特殊**：像“万金油”，能 Ramp/Swap 任何状态，但收益弱化（e.g. 50%效果），适合辅助/搅局。
:::


![系统总览](image.png)![系别对应](image-1.png)

### 🔄 2. 克制大循环（6系链条）
**顺序**：**亡灵 → 风暴 → 生命 → 火焰 → 神圣 → 冰霜 → (回亡灵)**
🔄 **轮盘逻辑：硬/软克 + 前/后协同**
- **硬克（Hard Counter）**：轮内直接克（Gambit）  
  **元素轮**：火焰>冰霜>风暴>火焰  
  **精神轮**：生命>神圣>亡灵>生命  
- **软克（Soft Counter）**：轮间交错（Ramp铺垫）  
  火焰软克神圣、神圣软克冰霜、冰霜软克亡灵、亡灵软克风暴、风暴软克生命、生命软克火焰  
- **后协同（Backward Synergy，上游）**：Oni条件（借上游铺垫）  
- **前协同（Forward Synergy，下游）**：Jinn条件（借下游资源）

### 📋 **3. 软硬克制速查表**

| 学派     | **软克（下游）**       | **硬克（下下游）**     | **Ramp 示例**          | **Gambit 示例**        |
|----------|------------------------|------------------------|------------------------|------------------------|
| **亡灵** | 风暴 **刃**           | 生命 **HOT**          | Putrefaction (刃→虚弱) | Macabre Jinn (刃条件) |
| **风暴** | 生命 **HOT**          | 火焰 **DOT**          | Energy Transfer (HOT→刃)| Thundering Jinn (HOT条件) |
| **生命** | 火焰 **DOT**          | 神圣 **陷阱**         | Jinn’s Affliction (DOT→HOT)| Verdurous Jinn (DOT条件) |
| **火焰** | 神圣 **陷阱**         | 冰霜 **盾**           | Meltdown (陷阱→DOT)    | Caldera Jinn (陷阱条件) |
| **神圣** | 冰霜 **盾**           | 亡灵 **虚弱**         | Betrayal (盾→陷阱)     | Phantastic Jinn (盾条件) |
| **冰霜** | 亡灵 **虚弱**         | 风暴 **刃**           | Wall of Blades (虚弱→盾)| Iceburn Jinn (虚弱条件) |
| **平衡** | **一切（弱化）**   | **一切（弱化）**   | Righting the Scales    | Duststorm Jinn         |

### 🤝 **4. 三系协同（Jinn / Oni / Scion）**

**相邻三系** = **上游 + 本系 + 下游**  
**Gambit 条件借力**：**Jinn 吃下游（软克）** | **Oni 吃上游（硬克铺垫）** | **Scion 自吃本系（反转）**


## 📌 命名说明

<details> 
<summary>为什么称为“策略博弈系统”</summary> 

“Rhoshambo” 本意来源于剪刀石头布的博弈逻辑，在 Wizard101 中被设计为状态层面的博弈体系，使得法术效果不仅依赖数值，还依赖于场上状态与条件判断。因此使用 **策略博弈系统** 来作为其通称。<grok-card data-id="ed312f" data-type="citation_card" data-plain-type="render_inline_citation" ></grok-card>
</details> 

## 📚 总结

<Badge type="success" text="总结" /> 

策略博弈系统让 Wizard101 的战斗从单纯的数值比拼，变为围绕 **状态管理、条件判定与战术选择** 的深层博弈。通过理解蓄势与险棋之间的协同，玩家可以在各种战斗场景中获得更高的胜率与策略深度。<grok-card data-id="dee386" data-type="citation_card" data-plain-type="render_inline_citation" ></grok-card><grok-card data-id="04d677" data-type="citation_card" data-plain-type="render_inline_citation" ></grok-card>



