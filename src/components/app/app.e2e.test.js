import App from './app';
import offers from '../../mocks/offers';

it(`It expect an Array contains Object with the following properties`, () => {
  const cards = offers;
  shallow(<App
    cards={offers}
  />);

  expect(cards).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String)
        })
      ])
  );

});
