import OfferList from "../offer-list/offer-list";
import Map from "../map/map";

const Cities = ({ offers, onOfferNameClick }) => {

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length ? `${offers.length} places to stay in Amsterdam` : ``}
        </b>

        <div className="cities__places-list places__list tabs__content">

          {<OfferList offers={offers} onOfferNameClick={onOfferNameClick} onOfferMouseOver={() => { }} />}

        </div>

      </section>
      <div className="cities__right-section">
        <section className="cities__map map">

          {offers.length > 0 ? <Map coordinates={offers ? offers.map((offer) => offer.coords) : [[0]]} currrentCoordinates={[]} /> : ``}

        </section>
      </div>
    </div>
  );
}

export default Cities;