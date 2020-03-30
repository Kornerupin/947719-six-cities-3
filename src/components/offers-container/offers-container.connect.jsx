import {connect} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import OffersContainer from './offers-container';

const mapStateToProps = (state) => ({
  offers: state[NameSpace.DATA].offers,
  city: state[NameSpace.DATA].city,
  offersByCity: state[NameSpace.DATA].offersByCity
});

export default connect(mapStateToProps)(OffersContainer);

