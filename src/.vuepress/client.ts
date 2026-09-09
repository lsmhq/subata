import { ClientOnly, defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app }) {
    app.component("ClientOnly", ClientOnly);
  },
});