import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";
import mockCards from "../../mocks/mock-cards";

Enzyme.configure({adapter: new Adapter()});

it(`It expect an Array contains Object with the following properties`, () => {
  const cards = mockCards;
  shallow(<App
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
