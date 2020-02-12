import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const mock = [
  {name: `Beautiful &amp; luxurious apartment at great location`},
  {name: `Wood and stone place`},
  {name: `Canal View Prinsengracht`},
  {name: `Nice, cozy, warm big bed apartment`},
];

const number = mock.length;

it(`Main /> should render cards`, () => {
  const tree = renderer.create(<Main cards={mock} number={number}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
