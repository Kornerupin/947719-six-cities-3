import OfferList from "../offer-list/offer-list";
import Sorting from "../sorting/sorting";
import Map from "../map/map";

const Cities = ({ offers, city, activePin, onOfferMouseOver, onOfferNameClick }) => {

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length ? `${offers.length} places to stay in ${city}` : ``}
        </b>
        {
          <Sorting />
        }
        <div className="cities__places-list places__list tabs__content">
          {
            <OfferList offers={offers} onOfferNameClick={onOfferNameClick} onOfferMouseOver={onOfferMouseOver} />
          }
        </div>

      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          {
            offers.length ?
            <Map
            coordinates={offers ? offers.map((offer) => offer.coords) : []}
            currentCoordinates={[]}
            activePin={activePin ? activePin.coords : null}/>
            : ``
          }
        </section>
      </div>
    </div>
  );
};

Cities.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferNameClick: PropTypes.func.isRequired
};

export default Cities;
