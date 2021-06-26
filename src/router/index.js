import { createRouter, createWebHistory } from "vue-router";

// import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

// import Dashboard from "@/pages/Dashboard.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/Sign/home.vue"),
  },
  // {
  //   path: "/",
  //   name: "Sign",
  //   component: () => import("@/Sign/Sign.vue"),
  // },
  // {
  //   path: "/",
  //   component: DashboardLayout,
  //   redirect: "/dashboard",
  //   children: [
  //     {
  //       path: "dashboard",
  //       name: "Dashboard",
  //       component: Dashboard,
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.baseURL),
  routes,
});
export default router;
