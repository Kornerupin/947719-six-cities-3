import OfferDetail from './offer-detail';
import offers from '../../mocks/offers';

it(`<OfferDetail /> Should render detail offer`, () => {
  const tree = renderer.create(<OfferDetail offer={offers[0]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
