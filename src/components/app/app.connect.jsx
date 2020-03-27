import App from './app';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/actions';

const mapStateToProps = (state) => ({
    offers: state.offers,
    offer: state.offer,
    cities: state.cities,
    city: state.city,
    currentCoordinate: state.currentCoordinate,
    currentSortOption: state.currentSortOption
});

const mapDispatchToProps = (dispatch) => ({
    onOfferMouseOver(currentCoordinate) {
        dispatch(ActionCreator.showActivePin(currentCoordinate));
    },
    onOfferNameClick(offer) {
        dispatch(ActionCreator.showOffer(offer));
    },
    onCityClick(city) {
        dispatch(ActionCreator.changeCity(city));
    },
    onSortOptionClick(currentSortOption) {
        dispatch(ActionCreator.changeSortOptions(currentSortOption));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
