<template>
  <div class="quiz-wrap">
    <n-config-provider v-if="quizReady" :theme="dark ? darkTheme : null">
    <div class="quiz">
      <n-tabs v-model:value="tab" type="line" animated>
        <n-tab-pane name="bank" tab="题库对照">
          <div class="toolbar">
            <n-input
              v-model:value="keyword"
              clearable
              placeholder="输入关键词搜索（题目或答案）"
              style="width: 360px"
              size="small"
            />
            <n-button size="small" tertiary @click="randomOne">随机一题</n-button>
          </div>

          <div v-if="randomItem" class="random-box">
            <n-alert type="info" :show-icon="false">
              <div class="random-q">{{ randomItem.q }}</div>
              <div class="random-a">答案：{{ randomItem.a }}</div>
            </n-alert>
          </div>

          <div class="q-list">
            <div
              v-for="(item, index) in filtered"
              :key="item.q"
              class="q-item"
              @click="toggle(index)"
            >
              <div class="q-head">
                <span class="q-index">{{ index + 1 }}</span>
                <span class="q-text">{{ item.q }}</span>
                <span class="q-more">{{ open.has(index) ? "收起" : "答案" }}</span>
              </div>
              <div v-if="open.has(index)" class="q-answer">答案：{{ item.a }}</div>
            </div>
          </div>
          <div v-if="filtered.length === 0" class="empty">没有匹配的题目</div>
        </n-tab-pane>

        <n-tab-pane name="script" tab="油猴脚本">
          <div class="script-tip">
            <span>把下面的脚本装进油猴（Tampermonkey）后，打开官方答题页面会自动漂浮显示答案与进度。脚本已内置全部题目，可离线使用。</span>
            <n-button type="primary" size="small" @click="copyScript">{{ copied ? "已复制" : "一键复制脚本" }}</n-button>
          </div>
          <pre class="code-box"><code>{{ scriptText }}</code></pre>
        </n-tab-pane>

        <n-tab-pane name="guide" tab="安装教程">
          <div class="guide">
            <h4>如何安装油猴脚本（浏览器）</h4>
            <ol>
              <li>打开浏览器扩展商店安装 <b>Tampermonkey</b>（Chrome/Edge 均支持，安装后浏览器右上角会出现油猴图标）。</li>
              <li>点击油猴图标 → <b>添加新脚本</b>，进入脚本编辑页。</li>
              <li>把"油猴脚本"标签页里的代码<b>全部复制并粘贴</b>进编辑页，覆盖默认内容。</li>
              <li>按 <b>Ctrl + S</b> 保存，脚本即生效。</li>
              <li>登录 <b>www.wizard101.com</b>，点 <b>Play</b> 进入答题入口，开始任意一条问答（Trivia）。</li>
              <li>页面右下角会显示<b>答案浮层</b>；在结算页会显示各条问答的<b>完成/未完成</b>列表，点击可直接跳转。</li>
            </ol>
            <n-alert type="warning" :show-icon="false">
              提示：官方答题为英文题目，答案以官方判定为准；本页题库仅为参考整理，脚本仅在官方答题页面运行。
            </n-alert>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </n-config-provider>
  </div>
</template>

<script>
import {
  NAlert,
  NButton,
  NConfigProvider,
  NInput,
  NTabPane,
  NTabs,
  darkTheme,
} from "naive-ui";
import questions from "./questions.json";

const USERSCRIPT_TEMPLATE = `
// ==UserScript==
// @name         Wizard101 皇冠答题助手
// @namespace    subata
// @version      1.0.0
// @description  在 Wizard101 答题页面显示答案并跟踪完成进度
// @match        https://www.wizard101.com/quiz/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

var questAddress = [
    'wizard101-magical-trivia',
    'wizard101-adventuring-trivia',
    'wizard101-conjuring-trivia',
    'wizard101-marleybone-trivia',
    'wizard101-mystical-trivia',
    'wizard101-spellbinding-trivia',
    'wizard101-spells-trivia',
    'pirate101-valencia-trivia',
    'wizard101-wizard-city-trivia',
    'wizard101-zafaria-trivia'
];

var QUESTIONS = __QUESTIONS__;
var basePath = 'https://www.wizard101.com/quiz/trivia/game/';

var STYLE_PANEL = 'display:flex;flex-direction:column;width:280px;padding:20px 0;position:fixed;text-align:center;bottom:20%;right:1%;background:rgb(57 57 57 / 85%);z-index:1000;border-radius:10px;color:#fff;user-select:none;overflow:hidden;';
var STYLE_H = 'height:30px;line-height:20px;font-size:21px;color:#fff;font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 30px;';
var STYLE_BTN = 'width:100%;position:relative;height:24px;line-height:24px;text-align:center;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 15px;box-sizing:border-box;';

var container = null;
var answerPanel = null;

var userName = '' + (function(){
    var el = document.getElementById('userNameOverflow');
    return el ? el.innerText : '';
})() || 'guest';

function getKey(){ return userName + '_quiz'; }
function loadDone(){
    try {
        var v = JSON.parse(localStorage.getItem(getKey()));
        return Object.prototype.toString.call(v) === '[object Array]' ? v : [];
    } catch (e) { return []; }
}
function saveDone(list){
    try { localStorage.setItem(getKey(), JSON.stringify(list)); } catch (e) {}
}

function main(){
    var quiz = document.getElementsByClassName('quizQuestion');
    var btnSub = document.getElementsByClassName('kiaccountsbuttongreen');
    var href = 'https://www.wizard101.com/game/earn-crowns';
    var isResult = (quiz.length === 0 && btnSub.length > 0 && btnSub[0].innerText === 'TAKE ANOTHER QUIZ!') || window.location.href === href;
    var isSummary = window.location.href.indexOf(basePath) === 0 && btnSub.length === 0 && quiz.length === 0;

    if (isResult || isSummary) {
        checkFinished();
        buildNav();
    } else if (document.getElementById('nextQuestion')) {
        showAnswer();
    }
}

function checkFinished(){
    var done = loadDone();
    var slug = (window.location.href.split('/')).pop();
    if (questAddress.indexOf(slug) >= 0 && done.indexOf(slug) < 0) { done.push(slug); }
    if (done.length >= 10) { done = []; }
    saveDone(done);
}

function buildNav(){
    cleanup();
    var done = loadDone();
    container = document.createElement('div');
    container.style.cssText = STYLE_PANEL;

    var title = document.createElement('div');
    title.style.cssText = STYLE_H;
    title.innerText = 'Wizard101 答题进度';
    container.appendChild(title);

    var noTitle = document.createElement('div');
    noTitle.style.cssText = STYLE_H;
    noTitle.style.color = '#00ceff';
    noTitle.innerText = '未完成';
    container.appendChild(noTitle);

    questAddress.forEach(function(slug, i){
        var btn = document.createElement('div');
        btn.style.cssText = STYLE_BTN;
        btn.innerText = (i + 1) + '. ' + slug;
        btn.onclick = function(){ window.location.href = basePath + slug; };
        btn.onmouseenter = function(){ btn.style.transform = 'scale(1.04)'; btn.style.background = '#000'; };
        btn.onmouseleave = function(){ btn.style.transform = 'scale(1)'; btn.style.background = 'none'; };
        container.appendChild(btn);
    });

    var doneTitle = document.createElement('div');
    doneTitle.style.cssText = STYLE_H;
    doneTitle.style.color = '#00ff6c';
    doneTitle.innerText = '已完成';
    container.appendChild(doneTitle);

    done.forEach(function(slug, i){
        var btn = document.createElement('div');
        btn.style.cssText = STYLE_BTN;
        btn.style.color = '#ffe200';
        btn.style.textDecoration = 'line-through';
        btn.innerText = (i + 1) + '. ' + slug;
        container.appendChild(btn);
    });

    document.body.appendChild(container);
}

function showAnswer(){
    cleanup();
    var quiz = document.getElementsByClassName('quizQuestion');
    var q = quiz.length > 0 ? quiz[0].innerText.trim() : '';
    var a = QUESTIONS[q] || '未找到';

    answerPanel = document.createElement('div');
    answerPanel.style.cssText = STYLE_PANEL;
    answerPanel.style.bottom = '5%';

    var label = document.createElement('div');
    label.style.cssText = STYLE_H;
    label.style.fontSize = '24px';
    label.innerText = '答案:';

    var text = document.createElement('div');
    text.style.cssText = STYLE_H;
    text.style.fontSize = '20px';
    text.innerText = a;

    answerPanel.appendChild(label);
    answerPanel.appendChild(text);
    document.body.appendChild(answerPanel);
}

function cleanup(){
    if (container) { container.remove(); container = null; }
    if (answerPanel) { answerPanel.remove(); answerPanel = null; }
}

function run(){
    var isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent || '');
    setTimeout(main, isMobile ? 1500 : 500);
}
run();
`;

export default {
  name: "Quiz",
  components: {
    NAlert,
    NButton,
    NConfigProvider,
    NInput,
    NTabPane,
    NTabs,
  },
  data() {
    return {
      tab: "bank",
      keyword: "",
      open: new Set(),
      randomItem: null,
      copied: false,
      dark: false,
      quizReady: false,
      questions,
    };
  },
  computed: {
    filtered() {
      const kw = this.keyword.trim().toLowerCase();
      if (!kw) return this.questions;
      return this.questions.filter(
        (it) => it.q.toLowerCase().includes(kw) || it.a.toLowerCase().includes(kw)
      );
    },
    scriptText() {
      const map = {};
      this.questions.forEach((it) => {
        map[it.q] = it.a;
      });
      return USERSCRIPT_TEMPLATE.replace("__QUESTIONS__", JSON.stringify(map));
    },
  },
  methods: {
    toggle(index) {
      const next = new Set(this.open);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      this.open = next;
    },
    randomOne() {
      if (!this.questions.length) return;
      const it = this.questions[Math.floor(Math.random() * this.questions.length)];
      this.randomItem = it;
      this.keyword = "";
      this.tab = "bank";
    },
    async copyScript() {
      const text = this.scriptText;
      try {
        await navigator.clipboard.writeText(text);
        this.copied = true;
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          this.copied = true;
        } catch (err) {
          this.copied = false;
        }
        document.body.removeChild(ta);
      }
      if (this.copied) {
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      }
    },
  },
  mounted() {
    this.quizReady = true;
    if (typeof document !== "undefined") {
      this._observer = new MutationObserver(() => {
        this.dark = document.documentElement.classList.contains("dark");
      });
      this._observer.observe(document.documentElement, { attributes: true });
    }
  },
  unmounted() {
    if (this._observer) this._observer.disconnect();
  },
};
</script>

<style scoped>
.quiz {
  max-width: 860px;
}
.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.random-box {
  margin-bottom: 14px;
}
.random-q {
  font-weight: 600;
}
.random-a {
  margin-top: 4px;
  color: #2f8f46;
}
.q-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.q-item {
  border: 1px solid #e2e5eb;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.q-item:hover {
  background: #f6f6f8;
}
.q-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.q-index {
  color: #888;
  font-size: 12px;
  min-width: 22px;
}
.q-text {
  flex: 1;
}
.q-more {
  color: #2080f0;
  font-size: 12px;
  flex-shrink: 0;
}
.q-answer {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed #e2e5eb;
  color: #2f8f46;
}
.empty {
  padding: 30px 0;
  text-align: center;
  color: #999;
}
.script-tip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  color: #666;
  font-size: 13px;
  line-height: 1.7;
}
.code-box {
  max-height: 480px;
  overflow: auto;
  background: #282c34;
  color: #d6d9df;
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}
.guide h4 {
  margin: 4px 0 14px;
}
.guide ol {
  line-height: 2.1;
  padding-left: 22px;
  margin-bottom: 16px;
}
</style>