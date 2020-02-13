import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";
import mockCards from "../../mocks/mock-cards";
/*eslint-disable */
it(`Card /> Should render one card`, () => {
  const tree = renderer.create(<Card card={mockCards[0]}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
