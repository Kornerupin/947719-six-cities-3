import App from './app';
import offersMock from '../../mocks/offers-mock';

it(`<App /> should render cards`, () => {
  const tree = renderer.create(<App offers={offersMock} />).toJSON();

  expect(tree).toMatchSnapshot();
});
