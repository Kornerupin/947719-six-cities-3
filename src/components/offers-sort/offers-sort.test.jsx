import OffersSort from './offers-sort.jsx';

it(`OffersSort should render sort menu`, () => {
  const tree = renderer
    .create(<OffersSort
      currentSortOption={`Popular`}
      onSortOptionClick={() => {}}
      onToggleSortClick={() => {}}
      isSortOpened={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
