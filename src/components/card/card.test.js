import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const card = [
  {name: `Beautiful &amp; luxurious apartment at great location`}
];

it(`Card /> should render card`, () => {
  const tree = renderer.create(<Card card={card}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
