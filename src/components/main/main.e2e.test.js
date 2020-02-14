import Main from './main';
import mockCards from '../../mocks/mock-cards';

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
