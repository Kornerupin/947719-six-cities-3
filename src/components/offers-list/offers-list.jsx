import Offer from "../offer/offer";

const getSortedOffers = (offers, currentSortType) => {
  switch (currentSortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

const OffersList = ({
  offers,
  onOfferMouseOver,
  onOfferNameClick
}) => {

  return offers.map((offer, index) => <Offer
    key={index}
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
