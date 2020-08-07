import { createWebHistory } from "vue-router";
import { createRouter } from "@modus/ionic-vue";

import Home from "@/views/Home.vue";
import Tabs from "@/views/Tabs.vue";
import AboutTab from "@/views/AboutTab.vue";
import AboutDefault from "@/views/AboutDefault.vue";
import AboutDetails from "@/views/AboutDetails.vue";

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: AboutTab,
      children: [
        {
          path: "",
          component: AboutDefault,
        },
        {
          path: "details",
          component: AboutDetails,
        },
      ],
    },
  ],
});

export default router;
