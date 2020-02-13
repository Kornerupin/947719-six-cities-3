import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import mockCards from "../../mocks/mock-cards";

it(`App /> should render cards`, () => {
  const tree = renderer.create(<App cards={mockCards} />).toJSON();

  expect(tree).toMatchSnapshot();
});
