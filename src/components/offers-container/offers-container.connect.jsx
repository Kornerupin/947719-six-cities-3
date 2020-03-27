import { connect } from 'react-redux';
import OffersContainer from './offers-container';

const mapStateToProps = (state) => ({
    offers: state.offers,
    city: state.city,
    offersByCity: state.offersByCity
});

export default connect(mapStateToProps)(OffersContainer);

