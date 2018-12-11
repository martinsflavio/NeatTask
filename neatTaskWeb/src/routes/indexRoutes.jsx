import LandingPage from "../views/LandingPage/LandingPage";
import BookingPage from "../views/BookingPage/BookingPage";
import NotFound from "../views/NotFound/NotFound";

//TODO abstract exact property
const indexRoutes = [
  { exact: true,  path: "/",        name: "LandingPage", component: LandingPage },
  { exact: false, path: "/booking", name: "BookingPage", component: BookingPage },
  { exact: false,                   name: "NotFound", component: NotFound }
];

export default indexRoutes;
