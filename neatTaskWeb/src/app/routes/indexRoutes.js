import { LandingPage, BookingPage, NotFound } from "../views/index.js";

//TODO abstract exact property
const indexRoutes = [
  { path: "/",        name: "LandingPage", component: LandingPage,  exact: true },
  { path: "/booking", name: "BookingPage", component: BookingPage },
  {                   name: "NotFound", component: NotFound }
];

export default indexRoutes;
