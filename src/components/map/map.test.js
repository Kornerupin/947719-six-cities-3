import Map from './map';
import offers from '../../mocks/offers';
import toJson from 'enzyme-to-json';

it(`<Map /> Should render the map`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);
  const tree = mount(<Map offers={offers} />, {attachTo: div});

  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});

