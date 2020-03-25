import OffersList from "../offers-list/offers-list";
import OffersSort from "../offers-sort/offers-sort";
import withToggleSort from '../../hocs/with-toggle-sort/with-toogle-sort';
import Map from "../map/map";
import {OfferProperties} from '../../proptypes/properties';

const OffersSortWithToggle = withToggleSort(OffersSort);

const OffersContainer = React.memo(function OffersContainer(props) {

  const {
    offers,
    city,
    activeCoordinate,
    onOfferMouseOver,
    onOfferNameClick,
    onSortOptionClick,
    currentSortOption
  } = props;
  
  const coordinates = offers.map((offer) => offer.coordinates);  
      
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length ? `${offers.length} places to stay in ${city}` : ``}
        </b>
        {
          <OffersSortWithToggle
            onSortOptionClick={onSortOptionClick}
            currentSortOption={currentSortOption}
          />
        }
        <div className="cities__places-list places__list tabs__content">
          {
            <OffersList
              offers={offers}
              onOfferNameClick={onOfferNameClick}
              onOfferMouseOver={onOfferMouseOver}
              currentSortOption={currentSortOption}
            />
          }
        </div>

      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          {
              <Map
                coordinates={coordinates}
                center={offers[0].cityCenter}
                zoom={offers[0].cityZoom}
                currentCoordinate={[]}
                activeCoordinate={activeCoordinate}
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
  activeCoordinate: PropTypes.array,
  onOfferMouseOver: PropTypes.func.isRequired,
  onOfferNameClick: PropTypes.func.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  currentSortOption: PropTypes.string.isRequired
};

export default OffersContainer;
