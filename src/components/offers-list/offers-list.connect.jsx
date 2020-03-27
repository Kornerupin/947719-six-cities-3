import { connect } from 'react-redux';
import OffersList from './offers-list';

export const mapStateToProps = (state) => ({
    offersByCity: state.offersByCity,
    offersByFilter: state.offersByFilter,
});

export default connect(mapStateToProps)(OffersList);
