import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/data/data';
import NameSpace from '../../reducer/name-space';
import App from './app';

export const mapStateToProps = (state) => ({
  offers: state[NameSpace.DATA].offers,
  offer: state[NameSpace.DATA].offer,
  cities: state[NameSpace.DATA].cities,
  city: state[NameSpace.DATA].city,
  currentCoordinate: state[NameSpace.DATA].currentCoordinate,
  currentFilter: state[NameSpace.DATA].currentFilter,
  offersByCity: state[NameSpace.DATA].offersByCity
});

export const mapDispatchToProps = (dispatch) => ({  
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  sortOffersByCity(offers, city) {
    dispatch(ActionCreator.sortOffersByCity(offers, city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);