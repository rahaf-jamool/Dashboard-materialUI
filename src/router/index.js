import { createRouter, createWebHistory } from "vue-router";

// import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

// import Dashboard from "@/pages/Dashboard.vue";


const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("@/Sign/home.vue"),
  // },
  {
    path: "/",
    name: "Sign",
    component: () => import("@/Sign/Sign.vue"),
  },
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
  //     // Products
  //     {
  //       path: "allproducts",
  //       name: "All Products",
  //       component: AllProducts,
  //     },

  //     {
  //       path: "newproduct",
  //       name: "New Product",
  //       component: NewProduct,
  //     },

  //     {
  //       path: "products/:id",
  //       name: "Products",
  //       component: EditProduct,
  //     },
  //     // Stores
  //     {
  //       path: "allstores",
  //       name: "All Stores",
  //       component: AllStores,
  //     },
  //     {
  //       path: "newstore",
  //       name: "New Store",
  //       component: NewStore,
  //     },
  //     {
  //       path: "stores/:id",
  //       name: "Stores",
  //       component: EditStore,
  //     },
  //     // Stores => Products
  //     {
  //       path: "store/:id/Products",
  //       name: "Store/Products",
  //       component: StoreProducts,
  //     },
  //     {
  //       path: "/store/:id/newproduct",
  //       name: "New Product in_Store",
  //       component: NewProductStor,
  //     },
  //     {
  //       path: "/store/:id/product/:id_product",
  //       name: "Edit Product in Store",
  //       component: EditProductStor,
  //     },
  //     // Categories
  //     {
  //       path: "allcategories",
  //       name: "allCategories",
  //       component: AllCategories,
  //     },
  //     {
  //       path: "editcategory/:id",
  //       name: "EditCategory",
  //       component: EditCategory,
  //     },
  //     {
  //       path: "newcategory",
  //       name: "NewCategory",
  //       component: NewCategory,
  //     },
  //     // Brands
  //     {
  //       path: "allbrands",
  //       name: "allBrands",
  //       component: AllBrands,
  //     },
  //     {
  //       path: "newbrand",
  //       name: "newbrand",
  //       component: NewBrand,
  //     },
  //     {
  //       path: "editbrand/:id",
  //       name: "editbrand",
  //       component: EditBrand,
  //     },
  //     // Doctors
  //     {
  //       path: "alldoctors",
  //       name: "allDoctors",
  //       component: AllDoctors,
  //     },
  //     {
  //       path: "newdoctor",
  //       name: "newdoctor",
  //       component: NewDoctors,
  //     },
  //     {
  //       path: "editdoctors/:id",
  //       name: "editdoctors",
  //       component: EditDoctors,
  //     },
  //     //Restaurant
  //     {
  //       path: "allrestaurant",
  //       name: "AllRestaurant",
  //       component: AllRestaurant,
  //     },
  //     {
  //       path: "newrestaurant",
  //       name: "NewRestaurant",
  //       component: NewRestaurant,
  //     },
  //     {
  //       path: "editrestaurant",
  //       name: "EditRestaurant",
  //       component: EditRestaurant,
  //     },
  //     // Restaurant meals
  //     {
  //       path: "allmeals",
  //       name: "AllMeals",
  //       component: AllMeals,
  //     },
  //     {
  //       path: "newmeals",
  //       name: "NewMeals",
  //       component: NewMeals,
  //     },
  //     {
  //       path: "editmeals",
  //       name: "EditMeals",
  //       component: EditMeals,
  //     },
  //       //Restaurant user
  //     {
  //       path: "allusers",
  //       name: "AllUsers",
  //       component: AllUsers,
  //     },
  //     {
  //       path: "newuser",
  //       name: "NewUser",
  //       component: NewUser,
  //     },
  //     {
  //       path: "edituser",
  //       name: "EditUser",
  //       component: EditUser,
  //     },
  //       //Restaurant Menu
  //     {
  //       path: "allmenus",
  //       name: "AllMenu",
  //       component: AllMenu,
  //     },
  //     {
  //       path: "newmenu",
  //       name: "NewMenu",
  //       component: NewMenu,
  //     },
  //     {
  //       path: "editmenu",
  //       name: "EditMenu",
  //       component: EditMenu,
  //     },
  //     // Offers
  //     {
  //     path: "allOffers",
  //     name: "All Offers",
  //     component: allOffers,
  //     }
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.baseURL),
  routes,
});
export default router;
