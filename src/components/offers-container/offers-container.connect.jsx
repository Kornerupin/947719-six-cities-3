import {connect} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import {getOffersByCity} from '../../reducer/data/selectors';
import OffersContainer from './offers-container';

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  city: state[NameSpace.DATA].city,
});

export default connect(mapStateToProps)(OffersContainer);
