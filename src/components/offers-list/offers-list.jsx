import Offer from "../offer/offer";
import {OptionType} from '../../consts';
import {OfferProperties} from "../../proptypes/properties";

const getSortedOffers = (offers, currentSortOption) => {
  switch (currentSortOption) {
    case OptionType.LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case OptionType.HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case OptionType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

const OffersList = (props) => {

  const {
    offers,
    onOfferMouseOver,
    onOfferNameClick,
    currentSortOption
  } = props;

  const sortedOffers = getSortedOffers(offers, currentSortOption);

  return sortedOffers.map((offer, index) => <Offer
    key={`offer-${index}`}
    offer={offer}
    onOfferMouseOver={onOfferMouseOver}
    onOfferNameClick={onOfferNameClick} />
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  onOfferMouseOver: PropTypes.func.isRequired,
  onOfferNameClick: PropTypes.func.isRequired
};

export default OffersList;
