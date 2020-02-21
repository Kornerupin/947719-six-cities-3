import App from './app';
import mockCards from '../../mocks/mock-cards';

it(`App /> should render cards`, () => {
  const tree = renderer.create(<App cards={mockCards} />).toJSON();

  expect(tree).toMatchSnapshot();
});
