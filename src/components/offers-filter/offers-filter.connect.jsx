import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/actions';
import OffersFilter from './offers-filter';

export const mapStateToProps = (state) => ({
  offersByCity: state.offersByCity,
  currentFilter: state.currentFilter,
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
