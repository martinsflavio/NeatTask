import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import indexRoute from "./routes/indexRoutes.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
});

test('Route Component received valid routes.', () => {
  const wrapper = shallow(<App />);
  const route = wrapper.find("[component]");
  expect(route.length).toBe(indexRoute.length);
});
