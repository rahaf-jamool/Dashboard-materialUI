<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/allproducts">
        <md-icon>person</md-icon>
        <p>All Products</p>
      </sidebar-link>
      <sidebar-link to="/allstores">
        <md-icon>person</md-icon>
        <p>All Stores</p>
      </sidebar-link>
      <sidebar-link to="/allcategories">
        <md-icon>person</md-icon>
        <p>All Categories</p>
      </sidebar-link>
      <sidebar-link to="/allbrands">
        <md-icon>person</md-icon>
        <p>All Brands</p>
      </sidebar-link>
      <sidebar-link to="/alldoctors">
        <md-icon>person</md-icon>
        <p>All Doctors</p>
      </sidebar-link>
      <sidebar-link to="/allrestaurant">
        <md-icon>person</md-icon>
        <p>All Restaurant</p>
      </sidebar-link>
      <sidebar-link to="/allOffers">
        <md-icon>person</md-icon>
        <p>All Offers</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>
