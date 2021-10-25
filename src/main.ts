import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import vuetify from "./plugins/vuetify";
// https://stackoverflow.com/questions/60946682/error-in-render-typeerror-cannot-read-property-smanddown-of-undefined-in-m
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

import colors from "vuetify/lib/util/colors";

const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3
      },
      dark: {
        primary: colors.blue.lighten1,
        secondary: colors.grey.darken3,
        accent: colors.shades.black,
        error: colors.red.accent3
      }
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  // vuetify: new Vuetify(),
  render: h => h(App)
}).$mount("#app");
