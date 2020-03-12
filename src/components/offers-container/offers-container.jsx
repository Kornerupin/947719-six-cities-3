import OffersList from "../offers-list/offers-list";
import OffersSort from "../offers-sort/offers-sort";
import Map from "../map/map";

const OffersContainer = ({
  offers,
  city,
  activePin,
  onOfferMouseOver,
  onOfferNameClick,
  onSortClick,
  isSortOpened,
  onSortOptionClick,
  currentOption
}) => {

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length ? `${offers.length} places to stay in ${city}` : ``}
        </b>
        {
          <OffersSort
            onSortClick={onSortClick}
            isSortOpened={isSortOpened}
            onSortOptionClick={onSortOptionClick}
            currentOption={currentOption}
          />
        }
        <div className="cities__places-list places__list tabs__content">
          {
            <OffersList
              offers={offers}
              onOfferNameClick={onOfferNameClick}
              onOfferMouseOver={onOfferMouseOver}
              currentOption={currentOption}
            />
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
                activePin={activePin ? activePin : null} />
              : ``
          }
        </section>
      </div>
    </div>
  );
};

OffersContainer.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferNameClick: PropTypes.func.isRequired
};

export default OffersContainer;