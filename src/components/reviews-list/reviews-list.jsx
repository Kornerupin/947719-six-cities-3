import Review from '../review/review';
import ReviewForm from '../review-form/review-form.connect';

const ReviewsList = ({ reviews, offerId }) => {

  return (<>
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews && reviews.length}</span></h2>
    <ul className="reviews__list">
      {        
        reviews.map((review, index) => {
          return <Review key={`review-${index}`} review={review} />
        })
      }
    </ul>
    {
      <ReviewForm offerId={offerId} />
    }
  </>
  );
};

ReviewsList.propTypes = {};

export default ReviewsList;
