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

import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      // Products
      {
        path: "AllProducts",
        name: "All Products",
        component: AllProducts
      },
    
      {
        path: "NewProduct",
        name: "New Product",
        component: NewProduct
      },
      
      {
        path: "Products/:id",
        name: "Products",
        component: EditProduct
      },
      // Stores
      {
        path: "AllStores",
        name: "All Stores",
        component: AllStores
      },
      {
        path: "NewStore",
        name: "New Store",
        component: NewStore
      },
      {
        path: "Stores/:id",
        name: "Stores",
        component: EditStore
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;