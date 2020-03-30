import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/data/data';
import NameSpace from '../../reducer/name-space';
import Offer from './offer';

export const mapStateToProps = (state) => ({
  currentCoordinate: state[NameSpace.DATA].currentCoordinate,
});

export const mapDispatchToProps = (dispatch) => ({
  onOfferMouseOver(currentCoordinate) {
    dispatch(ActionCreator.showActivePin(currentCoordinate));
  },
  onOfferNameClick(offer) {
    dispatch(ActionCreator.updateOffer(offer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
