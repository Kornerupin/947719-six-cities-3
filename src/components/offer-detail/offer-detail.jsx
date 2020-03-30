import OffersList from "../offers-list/offers-list";
import Map from '../map/map';
import ReviewsList from '../reviews-list/reviews-list';
import {getStars} from '../../utils';
import {OfferProperties} from '../../proptypes/properties';

const sortReviews = (reviews) => reviews.slice().sort((a, b) => b.time - a.time);

const OfferDetail = (props) => {
  const {
    offer,
    offers,
    offersByCity,
    currentCoordinate
  } = props;
  
  const {
    id,
    images,
    type,
    bedrooms,
    capacity,
    price,
    rating,
    name,
    facilities,
    hostAvatar,
    hostName,
    hostMessage,
    hostIsPro,
    reviews,
    cityCenter,
    cityZoom,
    isPremium} = offer;

  const OFFERS_MAX = 3;
  const REVIEWS_MAX = 10;

  const currentIndex = offersByCity.findIndex((element) => element.id === id);
  const neighbors = offersByCity > 0 ? offersByCity.slice().filter((element, index) => index !== currentIndex) : offers;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image, index) =>
                  <div key={`image-${index}`} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                )
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStars(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms

                </li>
                <li className="property__feature property__feature--adults">
                  Max {capacity} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    facilities.map((facility, index) =>
                      <li key={`facility-${index}`} className="property__inside-item">
                        {facility}
                      </li>
                    )
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${hostIsPro && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={hostAvatar} alt="Host avatar" width={74} height={74} />
                  </div>
                  <span className="property__user-name">
                    {hostName}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {hostMessage}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {
                  <ReviewsList reviews={sortReviews(reviews).slice(0, REVIEWS_MAX)} />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            {
              <Map
                coordinates={neighbors.slice(0, OFFERS_MAX).map((element) => element.coordinates)}
                currentCoordinate={currentCoordinate}
                center={cityCenter}
                zoom={cityZoom}
              />
            }
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  <OffersList
                    offersByCity={neighbors.slice(0, OFFERS_MAX)}
                    onOfferMouseOver={() => { }} />
                }
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

OfferDetail.defaultProps = {
  currentCoordinate: [0, 0],
  onOfferNameClick: () => { },
  onOfferMouseOver: () => { },
};

OfferDetail.propTypes = {
  offer: PropTypes.shape(OfferProperties),
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  currentCoordinate: PropTypes.arrayOf(PropTypes.number).isRequired,
  onOfferNameClick: PropTypes.func.isRequired,
  onOfferMouseOver: PropTypes.func.isRequired
};

export default OfferDetail;
