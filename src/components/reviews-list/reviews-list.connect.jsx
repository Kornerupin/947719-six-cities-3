import {connect} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import ReviewsList from './reviews-list';
import {sortReviews} from '../../reducer/review/selectors';

const mapStateToProps = (state) => ({
  reviews: sortReviews(state[NameSpace.DATA].offer.reviews)
});

export default connect(mapStateToProps)(ReviewsList);
