import ReactDOM from 'react-dom';
import App from './components/app/app';
import offersMock from './mocks/offers-mock';

ReactDOM.render(<App offers={offersMock} />, document.getElementById(`root`));
