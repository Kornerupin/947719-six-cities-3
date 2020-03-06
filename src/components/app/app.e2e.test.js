import App from './app';
import offersMock from '../../mocks/offers-mock';

it(`It expect an Array contains Object with the following properties`, () => {
  const offers = offersMock;
  shallow(<App
    offers={offers}
    onOfferNameClick={() => { }}
  />);

  offers.map((offer) => {
    expect(offer).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        city: expect.any(String),
        image: expect.arrayContaining([expect.any(String)]),
        type: expect.any(String),
        price: expect.any(String),
        rating: expect.any(Number),
        name: expect.any(String)
      })
    );
  });

});


