import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import App from "../App";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Work from "../pages/Work";
import Resume from "../pages/Resume";
import Connect from "../pages/Connect";

const rootRoute = createRootRoute({
  component: App,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const resumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resume",
  component: Resume,
});

const workRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/work",
  component: Work,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const connectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/connect",
  component: Connect,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  resumeRoute,
  workRoute,
  contactRoute,
  connectRoute,
  notFoundRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

export default router;
