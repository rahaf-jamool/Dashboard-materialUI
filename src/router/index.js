import { createRouter, createWebHistory } from "vue-router";

// import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

// import Dashboard from "@/pages/Dashboard.vue";

const routes = [
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
