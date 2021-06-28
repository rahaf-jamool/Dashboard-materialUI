// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from "./components/SidebarPlugin";

// asset imports
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material";
// import "./assets/scss/material-dashboard.scss";

// import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";

// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { createTheme , ThemeProvider} from "@material-ui/core/styles";
const theme = createTheme();
const useStyles = makeStyles(theme => ({
  background: theme.palette.primary.main
}));
function Component() {
  const classes = useStyles();
  return <div className={classes.root} />;
}
function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
}
// library auto imports
import "es6-promise/auto";

export default {
  install(Vue) {
    Vue.use(SideBar);
    Vue.use(VueMaterial);
  },
};
