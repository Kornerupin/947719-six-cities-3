import withToggleFilter from './with-toogle-filter.jsx';
import React from "react";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withToggleFilter(MockComponent);

it(`Should toggle sort`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);
  expect(wrapper.props().isFilterOpened).toBe(false);
  wrapper.props().onToggleFilterClick();
  expect(wrapper.props().isFilterOpened).toBe(true);
});
