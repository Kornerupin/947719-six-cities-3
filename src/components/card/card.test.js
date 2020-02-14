import Card from './card';
import mockCards from '../../mocks/mock-cards';

it(`Card /> Should render one card`, () => {
  const tree = renderer.create(<Card card={mockCards[0]}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
