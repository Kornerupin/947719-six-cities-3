import {getStars} from '../../utils';
import {ReviewProperties} from "../../properties.js";

const getFormatDate = (utc) => {
  const date = new Date(utc);

  return `${date.toLocaleString(`default`, {month: `long`})} ${date.getDate()}, ${date.getFullYear()}`;
};

const Reviews = ({review}) => {
  const {avatar, name, rating, text, time} = review;

  return (<>
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} alt="Reviews avatar" width={54} height={54} />
        </div>
        <span className="reviews__user-name">
          {name}
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
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{getFormatDate(time)}</time>
      </div>
    </li>
  </>
  );
};

Reviews.propTypes = {
  review: (PropTypes.shape(ReviewProperties))
};

export default Reviews;
