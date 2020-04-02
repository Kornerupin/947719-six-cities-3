import {connect} from 'react-redux';
import {getOffersByCity, getCity} from '../../reducer/data/selectors';
import OffersContainer from './offers-container';

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  city: getCity(state),
});

export {OffersContainer};
export default connect(mapStateToProps)(OffersContainer);
