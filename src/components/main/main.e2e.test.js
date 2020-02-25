import Main from './main';
import offers from '../../mocks/offers';

const cards = offers;

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
