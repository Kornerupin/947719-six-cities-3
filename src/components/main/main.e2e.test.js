import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import mockCards from "../../mocks/mock-cards";

Enzyme.configure({adapter: new Adapter()});

const cards = mockCards;

it(`Expected an Array`, () => {
  shallow(<Main
    cards={cards}
  />);

  expect(cards).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String)
        })
      ])
  );

});
