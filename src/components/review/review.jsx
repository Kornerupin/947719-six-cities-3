import {getStars, getFormatDate} from '../../utils';
import {ReviewProperties} from "../../proptypes/properties";

const Review = (props) => {
  
  const {user, rating, comment, date} = props.review;

  return (<>
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar_url} alt="Reviews avatar" width={54} height={54} />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getStars(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{getFormatDate(date)}</time>
      </div>
    </li>
  </>
  );
};

Review.propTypes = {
  // review: (PropTypes.shape(ReviewProperties))
};

export default Review;
