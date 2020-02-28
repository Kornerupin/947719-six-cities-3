import OfferDetail from './offer-detail';
import offers from '../../mocks/offers';

const offer = offers[0];

it(`It expect an Object that contains the following properties`, () => {
  shallow(<OfferDetail
    offer={offer}
  />);

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
