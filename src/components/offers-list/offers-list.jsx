import Offer from "../offer/offer";
import { OptionType } from '../../consts';

const getSortedOffers = (offers, currentOption) => {
  switch (currentOption) {
    case OptionType.LOW_TO_HIGH:      
      return offers.slice().sort((a, b) => a.price - b.price);
    case OptionType.HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case OptionType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

const OffersList = ({
  offers,
  onOfferMouseOver,
  onOfferNameClick,
  currentOption
}) => {
  
  return getSortedOffers(offers, currentOption).map((offer, index) => <Offer
    key={`offer-${index}`}
    offer={offer}
    offers={offers}
    onOfferMouseOver={onOfferMouseOver}
    onOfferNameClick={onOfferNameClick} />
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferMouseOver: PropTypes.func.isRequired,
  onOfferNameClick: PropTypes.func.isRequired
};

export default OffersList;
