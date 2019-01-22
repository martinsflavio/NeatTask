import {
  LandingPage,
  BookingPage,
  ProfilePage,
  CreateAccount,
  NotFound } from "../views/index.js";

//TODO abstract exact property
const indexRoutes = [
  { path: "/",                name: "LandingPage",   component: LandingPage,  exact: true },
  { path: "/booking",         name: "BookingPage",   component: BookingPage },
  { path: "/profile/view",    name: "ViewProfile",   component: ProfilePage },
  { path: "/profile/create",  name: "CreateAccount", component: CreateAccount },
  {                           name: "NotFound",      component: NotFound }
];

export default indexRoutes;
