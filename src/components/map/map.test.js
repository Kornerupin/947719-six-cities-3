import Map from './map';
import offers from '../../mocks/offers';

it(`<Map /> Should render the map`, () => {
  const tree = renderer.create(<Map offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});

