import OfferDetail from './offer-detail';
import offersMock from '../../mocks/offers-mock';

it(`<OfferDetail /> Should render detail offer`, () => {
  const tree = renderer.create(<OfferDetail offer={offersMock[0]} offers={offersMock} onOfferNameClick={() => { }} />).toJSON();

  expect(tree).toMatchSnapshot();
});
