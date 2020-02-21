import App from './app';
import offers from '../../mocks/offers';

it(`App /> should render cards`, () => {
  const tree = renderer.create(<App cards={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});
