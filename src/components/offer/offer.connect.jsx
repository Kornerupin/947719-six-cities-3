import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/actions';
import Offer from './offer';

export const mapStateToProps = (state) => ({
    currentCoordinate: state.currentCoordinate,
});

export const mapDispatchToProps = (dispatch) => ({
    onOfferMouseOver(currentCoordinate) {
        dispatch(ActionCreator.showActivePin(currentCoordinate));
    },
    onOfferNameClick(offer) {
        dispatch(ActionCreator.showOffer(offer));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
