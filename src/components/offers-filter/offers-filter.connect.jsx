import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/data/data';
import OffersFilter from './offers-filter';
import NameSpace from '../../reducer/name-space';

export const mapStateToProps = (state) => ({
  offers: state[NameSpace.DATA].offers,
  currentFilter: state[NameSpace.DATA].currentFilter,
});

export const mapDispatchToProps = (dispatch) => ({
  onFilterOptionClick(filter) {
    dispatch(ActionCreator.changeFilterOptions(filter));
  },
  sortOffersByFilter(offers, filter) {
    dispatch(ActionCreator.sortOffersByFilter(offers, filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersFilter);
