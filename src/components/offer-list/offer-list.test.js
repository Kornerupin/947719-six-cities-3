import OfferList from './offer-list';
import offers from '../../mocks/offers';

it(`OfferList /> Should render list of cards`, () => {
  const tree = renderer.create(<OfferList offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});
