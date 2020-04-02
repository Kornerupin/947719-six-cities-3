import {connect} from 'react-redux';
import {Operation as ReviewOperation} from "../../reducer/review/review";
import {isLoadingStatus, isSuccessStatus, getReviewError, getUserRating, getUserReview} from "../../reducer/review/selectors.js";
import ReviewForm from './review-form';

const mapStateToProps = (state) => ({
  error: getReviewError(state),
  isLoading: isLoadingStatus(state),
  isSuccess: isSuccessStatus(state),
  userRating: getUserRating(state),
  userReview: getUserReview(state)
});

const mapDispatchToProps = {
  setUserRating: ReviewOperation.setUserRating,
  setUserReview: ReviewOperation.setUserReview,
  sendReview: ReviewOperation.sendReview,
  clearStatus: ReviewOperation.clearStatus
};

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
