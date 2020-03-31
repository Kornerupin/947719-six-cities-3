import {connect} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import {getOffersByCity} from '../../reducer/data/selectors';

import App from './app';

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  offer: state[NameSpace.DATA].offer,
  city: state[NameSpace.DATA].city,
  currentCoordinate: state[NameSpace.DATA].currentCoordinate,
  currentFilter: state[NameSpace.DATA].currentFilter,
});

export default connect(mapStateToProps)(App);
