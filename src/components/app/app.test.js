import App from './app';
import offersMock from '../../mocks/offers-mock';

it(`<App /> should render cards`, () => {
  const tree = renderer.create(<App offers={offersMock} onOfferNameClick={() => { }} />).toJSON();

  expect(tree).toMatchSnapshot();
});
