import {connect} from 'react-redux';
import {Operation as DataOperation} from "../../reducer/data/data";
import {getOffersByCity, getCurrentFilter} from '../../reducer/data/selectors';
import OffersFilter from './offers-filter';

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  currentFilter: getCurrentFilter(state),
});

const mapDispatchToProps = {
  onFilterOptionClick: DataOperation.sortOffersByFilter
};

export {OffersFilter};
export default connect(mapStateToProps, mapDispatchToProps)(OffersFilter);
