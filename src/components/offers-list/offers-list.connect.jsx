import {connect} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import OffersList from './offers-list';

const getOffersByCity = (state) => {  
  return state[NameSpace.DATA].offers.filter((offer) => offer.city === state[NameSpace.DATA].city);
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state)
});

export default connect(mapStateToProps)(OffersList);
