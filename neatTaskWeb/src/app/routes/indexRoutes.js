import {
  LandingPage,
  BookingPage,
  ProfilePage,
  NotFound } from "../views/index.js";

//TODO abstract exact property
const indexRoutes = [
  { path: "/",         name: "LandingPage", component: LandingPage,  exact: true },
  { path: "/booking",  name: "BookingPage", component: BookingPage },
  { path: "/profile",  name: "ProfilePage", component: ProfilePage },
  {                    name: "NotFound",    component: NotFound }
];

export default indexRoutes;
