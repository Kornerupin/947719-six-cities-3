import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/app';
import offersMock from './mocks/offers-mock';

export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

const reducer = () => Object.assign({}, { offersMock }, {});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(`root`));
