import App from './app';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {offersMock} from '../mocks/offers';

const mockStore = configureStore([]);

it(`<App /> should render <Main />`, () => {
  const store = mockStore({});

  const tree = renderer
    .create(<Provider store={store}>
      <App
        offers={offersMock}
        offer={null}
        onOfferNameClick={() => {}}
        onOfferMouseOver={() => {}}
      />
    </Provider>, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
