import Offer from './offer';
import offersMock from '../../mocks/offers-mock';

it(`<Offer /> Should render one offer`, () => {
  const tree = renderer.create(
      <Offer
        offer={offersMock[0]}
        onOfferMouseOver={() => { }}
        onOfferNameClick={() => { }}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
