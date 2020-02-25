import OfferList from './offer-list';
import offers from '../../mocks/offers';

it(`<OfferList /> Should render list of offers`, () => {
  const tree = renderer.create(<OfferList
    offers={offers}
    onCardMouseOver={() => { }}
    onCardNameClick={() => { }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
