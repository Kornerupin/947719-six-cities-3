import {connect} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import ReviewsList from './reviews-list';

const mapStateToProps = (state) => ({
  reviews: state[NameSpace.DATA].offer.reviews,
});

export default connect(mapStateToProps)(ReviewsList);
