import Map from './map.jsx';

it(`<Map/> should render the map`, () => {
  const tree = renderer.create(
      <Map
        coordinates={[[0, 0]]}
        currentCoordinate={[0, 0]}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
