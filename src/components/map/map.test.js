import Map from './map';

describe(`<Map/>: `, () => {

  const coordinates = [
    [52.3909553943508, 4.929309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3909553943508, 4.929309666406198],
  ];

  it(`should render`, () => {
    const tree = renderer.create(
        <Map coordinates={coordinates} />,
        {createNodeMock: () => document.createElement(`section`)}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
