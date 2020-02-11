import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

const cardsMock = [
  {name: `Beautiful &amp; luxurious apartment at great location`},
  {name: `Wood and stone place`},
  {name: `Canal View Prinsengracht`},
  {name: `Nice, cozy, warm big bed apartment`}
];

it(`Should cards be rendered`, () => {
  const app = shallow(<App cards={cardsMock}/>);
  expect(app.mock.calls.length).toBe(app.length);
});
