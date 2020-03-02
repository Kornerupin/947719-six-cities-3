import App from './app';
import offersMock from '../../mocks/offers-mock';

it(`It expect an Array contains Object with the following properties`, () => {
  const offers = offersMock;
  shallow(<App
    offers={offers}
  />);

  cards.map((offer) => {
    expect(offer).toEqual(
        expect.objectContaining({
          image: expect.arrayContaining([expect.any(String)]),
          type: expect.any(String),
          price: expect.any(String),
          rating: expect.any(Number),
          name: expect.any(String)
        })
    );
  });

});


