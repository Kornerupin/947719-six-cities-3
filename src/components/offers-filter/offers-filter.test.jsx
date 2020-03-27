import OffersFilter from './offers-filter.jsx';

it(`OffersFilter should render sort menu`, () => {
  const tree = renderer
    .create(<OffersFilter
      currentFilter={`Popular`}
      onFilterOptionClick={() => {}}
      onToggleFilterClick={() => {}}
      isFilterOpened={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
