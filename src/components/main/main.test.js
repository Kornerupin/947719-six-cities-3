import Main from './main';
import offersMock from '../../mocks/offers-mock';

it(`<Main /> should render <Offers />`, () => {
  const tree = renderer.create(<Main
    offers={offersMock}
    onOfferMouseOver={() => { }}
    onOfferNameClick={() => { }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
