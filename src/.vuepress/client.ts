import { defineClientConfig } from "@vuepress/client";

import Button from "./components/Button/index.vue";
import Canculate from "./components/canculate/index.vue";
import Card from "./components/Card/index.vue";
import Icon from "./components/Icon/index.vue";
import ItemsDb from "./components/items-db/index.vue";
import PackSimulator from "./components/pack-simulator/index.vue";
import PopOver from "./components/popover/index.vue";
import Quiz from "./components/quiz/index.vue";
import Update from "./components/update/index.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Button", Button);
    app.component("Canculate", Canculate);
    app.component("Card", Card);
    app.component("Icon", Icon);
    app.component("ItemsDb", ItemsDb);
    app.component("PackSimulator", PackSimulator);
    app.component("PopOver", PopOver);
    app.component("Quiz", Quiz);
    app.component("Update", Update);
  },
});