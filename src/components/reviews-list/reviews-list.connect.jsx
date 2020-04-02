import {connect} from 'react-redux';
import ReviewsList from './reviews-list';
import {sortByDate} from '../../reducer/review/selectors';
import {getOfferId} from '../../reducer/data/selectors';

const mapStateToProps = (state) => ({
  reviews: sortByDate(state),
  offerId: getOfferId(state)
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
