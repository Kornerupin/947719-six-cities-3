import { ReviewProperties } from "../../proptypes/properties";
import {RatingValues, MIN_COMMENT_LENGTH} from "../../consts";

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.valueChangedHandler = this.valueChangedHandler.bind(this);
    this.valuesResetHandler = this.valuesResetHandler.bind(this);
  }

  get isFormValid() {
    const {rating, review} = this.props;
    return rating !== undefined && review !== undefined && review.length > MIN_COMMENT_LENGTH;
  }

  componentDidUpdate() {
    const {isSuccess, clearStatus, onValuesReset} = this.props;
    if (isSuccess) {
      onValuesReset();
      clearStatus();
    }
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
        
    const {rating, review, sendReview, isLoading, offerId} = this.props;
    
    if (isLoading || !this.isFormValid) {
      return;
    }

    sendReview(offerId, {rating, comment: review});
  }

  
  handleValueChange(evt) {
    // this.setState({[evt.target.name]: evt.target.value});
    console.log(`evt.target.name`, evt.target.name);
    console.log(`evt.target.value`, evt.target.value);

  }

  handleValueReset() {
    const cleanState = {};
    Object.keys(this.state).forEach((key) => {
      cleanState[key] = ``;
    });
    this.setState(cleanState);
  }

  render() {

    const {rating, review, isLoading: disabled, error, handleValueChange} = this.props;
    
    const isFormValid = this.isFormValid;

    return (
        <form className="reviews__form form" action="#" method="post" onSubmit={this.handleFormSubmit}>
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            {RatingValues.map((ratingValue) =>
              <React.Fragment key={ratingValue}>
                <input className="form__rating-input visually-hidden" name="rating" value={`${ratingValue}`} id={`${ratingValue}-stars`} type="radio" disabled={disabled} defaultChecked={ratingValue === rating} onChange={handleValueChange} />
                <label htmlFor={`${ratingValue}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            )}
          </div>
          <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleValueChange} value={review} disabled={disabled}></textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit" disabled={disabled || !isFormValid}>Submit</button>
          </div>
          <div className="reviews__error">{error}</div>
        </form>
    );
  }
}

ReviewForm.propTypes = {};

export default ReviewForm;
