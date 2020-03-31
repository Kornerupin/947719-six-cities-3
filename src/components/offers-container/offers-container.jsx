import {FIRST_CITY} from '../../consts';
import OffersList from "../offers-list/offers-list";
import OffersFilter from "../offers-filter/offers-filter.connect";
import withToggleFilter from '../../hocs/with-toggle-filter/with-toogle-filter';
import Map from "../map/map";
import { OfferProperties } from '../../proptypes/properties';

const OffersFilterWithToggle = withToggleFilter(OffersFilter);

const OffersContainer = React.memo(function OffersContainer(props) {

  const {
    city,
    currentCoordinate,
    offers,
  } = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length ? `${offers.length} places to stay in ${city}` : ``}
        </b>
        {
          <OffersFilterWithToggle />
        }
        <div className="cities__places-list places__list tabs__content">
          {
            <OffersList offers={offers} />
          }
        </div>

      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          {
            offers.length > 0 && <Map
              coordinates={offers.map((offer) => offer.coordinates)}
              center={offers[FIRST_CITY].cityCenter}
              zoom={offers[FIRST_CITY].cityZoom}
              currentCoordinate={currentCoordinate}
            />
          }
        </section>
      </div>
    </div>
  );
});

OffersContainer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  city: PropTypes.string.isRequired,
  currentCoordinate: PropTypes.array
};

export default OffersContainer;
