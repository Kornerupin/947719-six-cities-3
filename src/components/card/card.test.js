import Card from './card';
import offers from '../../mocks/offers';

it(`<Card /> Should render one card`, () => {
  const tree = renderer.create(
      <Card
        card={offers[0]}
        onCardMouseOver={() => { }}
        onCardNameClick={() => { }}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
