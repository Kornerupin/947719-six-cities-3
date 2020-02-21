import OfferList from './offer-list';
import offers from '../../mocks/offers';

const card = offers;

it(`It expect an Array that contains the following properties`, () => {
  shallow(<OfferList
    offers={offers}
  />);

  expect(card).toEqual(
      expect.arrayContaining({
        image: expect.arrayContaining([expect.any(String)]),
        type: expect.any(String),
        price: expect.any(String),
        name: expect.any(String)
      })
  );

});
