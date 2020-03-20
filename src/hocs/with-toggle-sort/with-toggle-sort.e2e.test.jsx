import withToggleSort from './with-toogle-sort.jsx';
import React from "react";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withToggleSort(MockComponent);

it(`Should toggle sort`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);
  expect(wrapper.props().isSortOpened).toBe(false);
  wrapper.props().onToggleSortClick();
  expect(wrapper.props().isSortOpened).toBe(true);
});
