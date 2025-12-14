import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/ContactListPage.vue"),
    },
    {
      path: "/contact",
      name: "create",
      component: () => import("../pages/ContactCreatePage.vue"),
    },
    {
      path: "/contact/:id",
      name: "detail",
      component: () => import("../pages/ContactDetailPage.vue"),
    },
    {
      path: "/contact/update/:id",
      name: "update",
      component: () => import("../pages/ContactUpdatePage.vue"),
    },
  ],
});

export default router;
