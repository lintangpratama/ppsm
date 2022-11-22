import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import LoginAdmin from "../pages/LoginAdmin.vue";
import HomeAdmin from "../pages/HomeAdmin.vue";
import HomeUser from "../pages/HomeUser.vue";
import AddEvent from "../pages/AddEvent.vue";
import EventListAdmin from "../pages/EventListAdmin.vue";
import AllEvents from "../pages/AllEvents.vue";
import DetailEvent from "../pages/Details.vue";
import EventDetailAdmin from "../pages/EventDetailAdmin.vue";
import EventEditAdmin from "../pages/EventEditAdmin.vue";
import Login from "../pages/LoginUser.vue";
import RegisterUser from "../pages/RegisterUser.vue";
import RegisterEvent from "../pages/RegisterEvent.vue";
import OrderListUser from "../pages/OrderListUser.vue";
import OrderDetailUser from "../pages/OrderDetailUser.vue";

const routes = [
  {
    path: "/",
    name: "Root",
    component: Home,
  },
  {
    path: "/login-admin",
    name: "LoginAdmin",
    component: LoginAdmin,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeUser,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterUser,
  },
  {
    path: "/events",
    name: "Events",
    component: AllEvents,
  },
  {
    path: "/order",
    name: "Order",
    component: OrderListUser,
  },
  {
    path: "/order/:orderId",
    name: "DetailOrder",
    component: OrderDetailUser,
  },
  {
    path: "/events/:eventId",
    name: "DetailEvent",
    component: DetailEvent,
  },
  {
    path: "/register-event/:eventId",
    name: "RegisterEvent",
    component: RegisterEvent,
  },
  {
    path: "/admin/add-event",
    name: "AddEvent",
    component: AddEvent,
  },
  {
    path: "/admin",
    name: "Admin",
    component: HomeAdmin,
  },
  {
    path: "/admin/event-list",
    name: "EventList",
    component: EventListAdmin,
  },
  {
    path: "/admin/event-list/:eventId",
    name: "EventDetailAdmin",
    component: EventDetailAdmin,
  },
  {
    path: "/admin/edit-event/:eventId",
    name: "EventEditAdmin",
    component: EventEditAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
