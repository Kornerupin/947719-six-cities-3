import OfferList from './offer-list';
import offersMock from '../../mocks/offers-mock';

it(`<OfferList /> Should render list of offers`, () => {
  const tree = renderer.create(<OfferList
    offers={offersMock}
    onOfferMouseOver={() => { }}
    onOfferNameClick={() => { }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
