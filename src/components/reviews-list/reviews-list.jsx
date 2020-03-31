import Review from '../review/review';
import ReviewForm from '../review-form/review-form';

const ReviewsList = ({reviews}) => {
  
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

ReviewsList.propTypes = {};

export default ReviewsList;
