import OfferList from './offer-list';
import offersMock from '../../mocks/offers-mock';

it(`It expect an Object that contains the following properties`, () => {
  shallow(<OfferList
    offers={offersMock}
    onOfferMouseOver={() => { }}
    onOfferNameClick={() => { }}
  />);

  offers.map((offer) => {
    expect(offer).toEqual(
        expect.objectContaining({
          image: expect.arrayContaining([expect.any(String)]),
          type: expect.any(String),
          price: expect.any(String),
          name: expect.any(String)
        })
    );
  });
});

