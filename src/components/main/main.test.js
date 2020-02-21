import Main from './main';
import mockCards from '../../mocks/mock-cards';

it(`Main /> should render cards`, () => {
  const tree = renderer.create(<Main cards={mockCards} />).toJSON();

  expect(tree).toMatchSnapshot();
});
