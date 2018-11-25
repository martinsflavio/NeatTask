import LandingPage from "../views/LandingPage/LandingPage";
import BookingPage from "../views/BookingPage/BookingPage";


const indexRoutes = [
  { exact: true,  path: "/",        name: "LandingPage", component: LandingPage },
  { exact: false, path: "/booking", name: "BookingPage", component: BookingPage }
];

export default indexRoutes;
