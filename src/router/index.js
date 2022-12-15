import { createRouter, createWebHistory } from "vue-router";


import YoutubeDownloadView from "../views/YoutubeDownloadView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "youtube-download",
      component: YoutubeDownloadView,
    },
  ],
});

export default router;
