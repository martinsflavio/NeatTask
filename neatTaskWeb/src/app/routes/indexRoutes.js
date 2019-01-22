import {
  LandingPage,
  BookingPage,
  ProfilePage,
  CreateAccountPage,
  NotFound } from "../views/index.js";

//TODO abstract exact property
const indexRoutes = [
  { path: "/",                name: "LandingPage",       component: LandingPage,           exact: true },
  { path: "/profile/view",    name: "ViewProfile",       component: ProfilePage,           exact: true},
  { path: "/profile/create",  name: "CreateAccountPage", component: CreateAccountPage,     exact: true },
  { path: "/booking",         name: "BookingPage",       component: BookingPage },
  {                           name: "NotFound",          component: NotFound }
];

export default indexRoutes;
