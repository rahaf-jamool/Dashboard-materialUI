import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
// Products
import AllProducts from "@/pages/AllProducts.vue";
import NewProduct from "@/pages/NewProduct.vue";
import EditProduct from "@/pages/EditProduct.vue";
// Stores
import AllStores from "@/pages/AllStores.vue";
import NewStore from "@/pages/NewStore.vue";
import EditStore from "@/pages/EditStore.vue";
// Ctegories
import AllCategories from "@/pages/AllCategories.vue";
import NewCategory from "@/pages/NewCategory.vue";
import EditCategory from "@/pages/EditCategory.vue";
// Brands
import AllBrands from "@/pages/AllBrands.vue";
import NewBrand from "@/pages/NewBrand.vue";
import EditBrand from "@/pages/EditBrand.vue";
// Store Products
import StoreProducts from "@/pages/StoreProducts.vue";
import NewProductStor from "@/pages/NewProductStor.vue";
import EditProductStor from "@/pages/EditProductStor.vue";
//Doctors
import AllDoctors from "@/pages/AllDoctors.vue";
import NewDoctors from "@/pages/NewDoctors.vue";
import EditDoctors from "@/pages/EditDoctors.vue";

const routes = [
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
        path: "AllProducts",
        name: "All Products",
        component: AllProducts,
      },

      {
        path: "NewProduct",
        name: "New Product",
        component: NewProduct,
      },

      {
        path: "Products/:id",
        name: "Products",
        component: EditProduct,
      },
      // Stores
      {
        path: "AllStores",
        name: "All Stores",
        component: AllStores,
      },
      {
        path: "NewStore",
        name: "New Store",
        component: NewStore,
      },
      {
        path: "Stores/:id",
        name: "Stores",
        component: EditStore,
      },
      // Stores => Products
      {
        path: "Store/:id/Products",
        name: "Store/Products",
        component: StoreProducts,
      },
      {
        path: "/Store/:id/NewProduct",
        name: "New Product in_Store",
        component: NewProductStor,
      },
      {
        path: "/Store/:id/product/:id_product",
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
        path: "allDoctors",
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
    ],
  },
];

export default routes;
