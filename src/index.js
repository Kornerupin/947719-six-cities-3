import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/app';
import offersMock from './mocks/offers-mock';
import { reducer } from './reducer';

ReactDOM.render(
    <Provider store={store}>
        <App offers={offersMock} />
    </Provider>,
document.getElementById(`root`));
