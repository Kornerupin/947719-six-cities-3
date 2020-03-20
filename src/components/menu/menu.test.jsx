import Menu from './menu.jsx';

it(`<Menu /> should render cities list`, () => {
  const tree = renderer
    .create(<Menu
      cities={[`Berlin`, `Rome`, `Prague`]}
      onCityClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
