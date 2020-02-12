import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const mock = [
  {name: `Beautiful &amp; luxurious apartment at great location`},
  {name: `Wood and stone place`},
  {name: `Canal View Prinsengracht`},
  {name: `Nice, cozy, warm big bed apartment`},
];

it(`App /> should render cards`, () => {
  const tree = renderer.create(<App cards={mock} />).toJSON();

  expect(tree).toMatchSnapshot();
});
