import {connect} from 'react-redux';
import {
  getOffersByCity,
  getOffer,
  getCity,
  getCurrentCoordinate,
  getCurrentFilter
} from '../../reducer/data/selectors';
import App from './app';

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  offer: getOffer(state),
  city: getCity(state),
  currentCoordinate: getCurrentCoordinate(state),
  currentFilter: getCurrentFilter(state),
});

export {App};
export default connect(mapStateToProps)(App);
