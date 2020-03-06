import OfferList from './offer-list';
import offersMock from '../../mocks/offers-mock';

it(`It expect an Object that contains the following properties`, () => {
  shallow(<OfferList
    offers={offersMock}
    onOfferMouseOver={() => { }}
    onOfferNameClick={() => { }}
  />);

  offersMock.map((offer) => {
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

