import Review from '../review/review';
import ReviewForm from '../review-form/review-form';

import { ReviewProperties } from "../../proptypes/properties";

const ReviewsList = ({ reviews }) => {

  return (<>
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews && reviews.length}</span></h2>
    <ul className="reviews__list">
      {
        reviews.map((review, index) => <Review key={`review-${index}`} review={review} />)
      }
    </ul>
    {
      <ReviewForm />
    }
  </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewProperties))
};

export default ReviewsList;
