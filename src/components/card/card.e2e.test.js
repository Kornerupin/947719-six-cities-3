import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({adapter: new Adapter()});

const cardMock = [
  {name: `Beautiful &amp; luxurious apartment at great location`}
];

it(`Should cards be rendered`, () => {
  const card = shallow(<Card card={cardMock}/>);
  expect(card.mock.calls).toBe(card.length);
});
