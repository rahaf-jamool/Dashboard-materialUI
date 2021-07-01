import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
// Products
import AllProducts from "@/pages/Product/View/AllProducts.vue";
import NewProduct from "@/pages/Product/View/NewProduct.vue";
import EditProduct from "@/pages/Product/View/EditProduct.vue";
// Stores
import AllStores from "@/pages/Store/View/AllStores.vue";
import NewStore from "@/pages/Store/View/NewStore.vue";
import EditStore from "@/pages/Store/View/EditStore.vue";
// Ctegories
import AllCategories from "@/pages/Categories/View/AllCategories.vue";
import NewCategory from "@/pages/Categories/View/NewCategory.vue";
import EditCategory from "@/pages/Categories/View/EditCategory.vue";
// Brands
import AllBrands from "@/pages/Brands/View/AllBrands.vue";
import NewBrand from "@/pages/Brands/View/NewBrand.vue";
import EditBrand from "@/pages/Brands/View/EditBrand.vue";
// Store Products
import StoreProducts from "@/pages/Product_Store/View/StoreProducts.vue";
import NewProductStor from "@/pages/Product_Store/View/NewProductStor.vue";
import EditProductStor from "@/pages/Product_Store/View/EditProductStor.vue";
//Doctors
import AllDoctors from "@/pages/Doctor/View/AllDoctors.vue";
import NewDoctors from "@/pages/Doctor/View/NewDoctors.vue";
import EditDoctors from "@/pages/Doctor/View/EditDoctors.vue";
//Restaurant
import AllRestaurant from "@/pages/Restaurant/View/restaurants/AllRestaurant.vue";
import NewRestaurant from "@/pages/Restaurant/View/restaurants/NewRestaurant.vue";
import EditRestaurant from "@/pages/Restaurant/View/restaurants/EditRestaurant.vue";
//Restaurant meals
import AllMeals from "@/pages/Restaurant/View/Meals/AllMeals.vue";
import NewMeals from "@/pages/Restaurant/View/Meals/NewMeals.vue";
import EditMeals from "@/pages/Restaurant/View/Meals/EditMeals.vue";
//Restaurant users
import AllUsers from "@/pages/Restaurant/View/Users/AllUsers.vue";
import NewUser from "@/pages/Restaurant/View/Users/NewUser.vue";
import EditUser from "@/pages/Restaurant/View/Users/EditUser.vue";
//Restauran Menus
import AllMenu from "@/pages/Restaurant/View/Menus/AllMenu.vue";
import NewMenu from "@/pages/Restaurant/View/Menus/NewMenu.vue";
import EditMenu from "@/pages/Restaurant/View/Menus/EditMenu.vue";
// Offer
import allOffers from "@/pages/Offers/View/allOffers.vue";
const routes = [
  {
    path: "/",
    name: "Sign",
    component: () => import("@/Sign/Sign.vue"),
  },
  // {
  //   path:"/",
  //   name:'Home',
  //   component:() => import("@/projectEdalili/views/Home.vue")
  // },
  // {
  //   path:"/signin",
  //   name:'SignIn',
  //   component:()=> import("@/Sign/views/SignIn.vue")
  // },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      // Products
      {
        path: "allproducts",
        name: "All Products",
        component: AllProducts,
      },

      {
        path: "newproduct",
        name: "New Product",
        component: NewProduct,
      },

      {
        path: "products/:id",
        name: "Products",
        component: EditProduct,
      },
      // Stores
      {
        path: "allstores",
        name: "All Stores",
        component: AllStores,
      },
      {
        path: "newstore",
        name: "New Store",
        component: NewStore,
      },
      {
        path: "stores/:id",
        name: "Stores",
        component: EditStore,
      },
      // Stores => Products
      {
        path: "store/:id/Products",
        name: "Store/Products",
        component: StoreProducts,
      },
      {
        path: "/store/:id/newproduct",
        name: "New Product in_Store",
        component: NewProductStor,
      },
      {
        path: "/store/:id/product/:id_product",
        name: "Edit Product in Store",
        component: EditProductStor,
      },
      // Categories
      {
        path: "allcategories",
        name: "allCategories",
        component: AllCategories,
      },
      {
        path: "editcategory/:id",
        name: "EditCategory",
        component: EditCategory,
      },
      {
        path: "newcategory",
        name: "NewCategory",
        component: NewCategory,
      },
      // Brands
      {
        path: "allbrands",
        name: "allBrands",
        component: AllBrands,
      },
      {
        path: "newbrand",
        name: "newbrand",
        component: NewBrand,
      },
      {
        path: "editbrand/:id",
        name: "editbrand",
        component: EditBrand,
      },
      // Doctors
      {
        path: "alldoctors",
        name: "allDoctors",
        component: AllDoctors,
      },
      {
        path: "newdoctor",
        name: "newdoctor",
        component: NewDoctors,
      },
      {
        path: "editdoctors/:id",
        name: "editdoctors",
        component: EditDoctors,
      },
      //Restaurant
      {
        path: "allrestaurant",
        name: "AllRestaurant",
        component: AllRestaurant,
      },
      {
        path: "newrestaurant",
        name: "NewRestaurant",
        component: NewRestaurant,
      },
      {
        path: "editrestaurant",
        name: "EditRestaurant",
        component: EditRestaurant,
      },
      // Restaurant meals
      {
        path: "allmeals",
        name: "AllMeals",
        component: AllMeals,
      },
      {
        path: "newmeals",
        name: "NewMeals",
        component: NewMeals,
      },
      {
        path: "editmeals",
        name: "EditMeals",
        component: EditMeals,
      },
      //Restaurant user
      {
        path: "allusers",
        name: "AllUsers",
        component: AllUsers,
      },
      {
        path: "newuser",
        name: "NewUser",
        component: NewUser,
      },
      {
        path: "edituser",
        name: "EditUser",
        component: EditUser,
      },
      //Restaurant Menu
      {
        path: "allmenus",
        name: "AllMenu",
        component: AllMenu,
      },
      {
        path: "newmenu",
        name: "NewMenu",
        component: NewMenu,
      },
      {
        path: "editmenu",
        name: "EditMenu",
        component: EditMenu,
      },
      // Offers
      {
        path: "allOffers",
        name: "All Offers",
        component: allOffers,
      },
    ],
  },
];

export default routes;
