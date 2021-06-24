import { directive as vClickOutside } from "vue-clickaway";

const GlobalDirectives = {
  install(createApp) {
    createApp.directive("click-outside", vClickOutside);
  },
};
export default GlobalDirectives;
