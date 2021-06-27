import Sidebar from "./SideBar";
import SidebarLink from "./SidebarLink";

const SidebarStore = {
  showSidebar: false,
  displaySidebar(value) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          SidebarStore: SidebarStore,
        };
      },
    });

    Object.defineProperty(Vue.prototype, "$sidebar", {
      get() {
        return this.$root.SidebarStore;
      },
    });
    Vue.component("side-bar", Sidebar);
    Vue.component("sidebar-link", SidebarLink);
  },
};

export default SidebarPlugin;
