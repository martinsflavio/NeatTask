import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import HeaderCustom from "./HeaderCustom.jsx";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<HeaderCustom />);
});

