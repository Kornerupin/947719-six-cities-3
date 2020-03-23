import OffersContainerEmpty from './offers-container-empty.jsx';

it(`<OffersContainerEmpty /> should render correctly`, () => {
  const tree = renderer
    .create(<OffersContainerEmpty city={`Dusseldorf`} isCity={false}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
