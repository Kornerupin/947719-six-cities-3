import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import mockCards from "../../mocks/mock-cards";

it(`Main /> should render cards`, () => {
  const tree = renderer.create(<Main cards={mockCards} />).toJSON();

  expect(tree).toMatchSnapshot();
});
