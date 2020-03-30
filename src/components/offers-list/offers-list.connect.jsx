import {connect} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import OffersList from './offers-list';

export const mapStateToProps = (state) => ({
  offers: state[NameSpace.DATA].offers,
  offersByCity: state[NameSpace.DATA].offersByCity
});

export default connect(mapStateToProps)(OffersList);
