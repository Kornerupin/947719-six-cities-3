import App from './app';
import OfferDetail from '../offer-detail/offer-detail';
import offersMock from '../../mocks/offers-mock';

it(`<App /> should render cards`, () => {
  const tree = renderer.create(<App offers={offersMock} onOfferNameClick={() => { }} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<App /> should render <OfferDetail />`, () => {
  const tree = renderer.create(<OfferDetail offers={offersMock} offer={offersMock[0]} onOfferNameClick={() => { }} />).toJSON();

  expect(tree).toMatchSnapshot();
});
