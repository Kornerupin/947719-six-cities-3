import { getStars } from '../../utils';

const Reviews = (props) => {
 const {avatar, name, rating, text, time} = props.review;
   
  return (<>
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ avatar } alt="Reviews avatar" width={54} height={54} />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getStars(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{time}</time>
      </div>
    </li>
  </>
  )
}

export default Reviews;