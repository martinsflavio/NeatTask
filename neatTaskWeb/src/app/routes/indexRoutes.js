import { LandingPage, BookingPage, NotFound } from "../views/index.js";

//TODO abstract exact property
const indexRoutes = [
  { exact: true,  path: "/",        name: "LandingPage", component: LandingPage },
  { exact: false, path: "/booking", name: "BookingPage", component: BookingPage },
  { exact: false,                   name: "NotFound", component: NotFound }
];

export default indexRoutes;
