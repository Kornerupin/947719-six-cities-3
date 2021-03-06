import Menu from "../menu/menu.connect";
import OffersContainerEmpty from "../offers-container-empty/offers-container-empty";
import OffersContainer from "../offers-container/offers-container.connect";
import {OfferProperties} from "../../proptypes/properties";

const Main = ({
  offers,
  city,
  currentCoordinate,
  currentFilter
}) => {
  
  const isOffers = offers ? offers.length > 0 : false;
  const isCity = offers ? false : true;
  const isAuth = false;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {isAuth ? `` : `Sign In`}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={`page__main page__main--index ${isOffers || `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            {
              <Menu />
            }
          </section>
        </div>
        <div className="cities">
          {
            isOffers
              ? <OffersContainer
                city={city}
                currentCoordinate={currentCoordinate}
                currentFilter={currentFilter}
              />
              : <OffersContainerEmpty city={city} isCity={isCity} />
          }
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  city: PropTypes.string.isRequired,
  currentCoordinate: PropTypes.array,
  currentFilter: PropTypes.string.isRequired
};

export default Main;
