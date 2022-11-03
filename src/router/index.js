import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Projects from "../views/Projects.vue";
import Experts from "../views/Experts.vue";
import Apply from "../views/Apply.vue";
import News from "../views/News.vue";
import Contact from "../views/Contact.vue";
import error from "../components/error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/experts",
    name: "Experts",
    component: Experts,
  },
  {
    path: "/apply",
    name: "Apply",
    component: Apply,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "*",
    name: "Error",
    component: error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
