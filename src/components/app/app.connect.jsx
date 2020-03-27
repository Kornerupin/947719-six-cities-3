import App from './app';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/actions';

export const mapStateToProps = (state) => ({
    offers: state.offers,
    offer: state.offer,
    cities: state.cities,
    city: state.city,
    currentCoordinate: state.currentCoordinate,
    currentFilter: state.currentFilter,
    offersByCity: state.offersByCity,
    offersByFilter: state.offersByFilter,
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
