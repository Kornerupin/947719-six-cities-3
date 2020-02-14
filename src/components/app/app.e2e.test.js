import App from './app';
import mockCards from '../../mocks/mock-cards';

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
