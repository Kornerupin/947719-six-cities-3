import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";
import mockCards from "../../mocks/mock-cards";

Enzyme.configure({adapter: new Adapter()});

const card = mockCards[0];

it(`It expect an Object that contains the following properties`, () => {
  shallow(<Card
    card={card}
  />);

  expect(card).toEqual(
      expect.objectContaining({
        name: expect.any(String)
      })
  );

});
