import Map from './map.jsx';

describe(`<Map/>: `, () => {

  it(`should render`, () => {
    const tree = renderer.create(
        <Map
          coordinates={[[0, 0], [0, 0], [0, 0], [0, 0]]}
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
});
