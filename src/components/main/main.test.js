import Main from './main';
import offers from '../../mocks/offers';

it(`Main /> should render cards`, () => {
  const tree = renderer.create(<Main
    offers={offers}
    onCardMouseOver={() => { }}
    onCardNameClick={() => { }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
