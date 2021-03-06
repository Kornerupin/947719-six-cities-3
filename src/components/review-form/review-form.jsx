import {RatingValues} from "../../consts";

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this); 
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const {userRating, userReview, onSubmitReviewForm, offerId} = this.props;

    onSubmitReviewForm(offerId, {rating: userRating, comment: userReview});
  }

  handleRatingChange(evt) {
    const {setUserRating} = this.props;
    setUserRating(evt.target.value);
  }

  handleReviewChange(evt) {
    const {setUserReview} = this.props;
    setUserReview(evt.target.value);
  }

  render() {

    const {userRating, userReview, error} = this.props;
        
    return (
        <form className="reviews__form form" action="#" method="post" onSubmit={this.handleFormSubmit}>
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            {RatingValues.map((ratingValue) =>
              <React.Fragment key={ratingValue}>
                <input className="form__rating-input visually-hidden" name="rating" value={`${ratingValue}`} id={`${ratingValue}-stars`} type="radio" disabled="" defaultChecked={ratingValue === userRating} onChange={this.handleRatingChange} />
                <label htmlFor={`${ratingValue}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            )}
          </div>
          <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={this.handleReviewChange} value={userReview}></textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit">Submit</button>
          </div>
          <div className="reviews__error">{error}</div>
        </form>
    );
  }
}

ReviewForm.propTypes = {};

export default ReviewForm;
