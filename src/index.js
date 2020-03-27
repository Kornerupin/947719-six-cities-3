import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { compose } from "recompose";
import { createAPI } from "./api.js";
import { ActionCreator } from './reducer/actions';
import { reducer } from './reducer/reducer';
import App from './components/app/app.connect';
import Adapter from './adapter';

const api = createAPI();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

const queryData = () => (dispatch, getState, api) => {
  return api.get(`/hotels`)
    .then((response) => {    
      const offers = response.data.map((offer) => Adapter.parse(offer));            
      dispatch(ActionCreator.loadOffers(offers));
      dispatch(ActionCreator.getCities(offers));
      dispatch(ActionCreator.sortOffersByCity(offers, getState().city));
    });
}

store.dispatch(queryData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`));
