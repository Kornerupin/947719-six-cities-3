import Offer from "../offer/offer";

const OfferList = ({offers, onOfferMouseOver, onOfferNameClick}) => {

  return offers.map((offer, index) => <Offer
    key={index}
    offer={offer}
    offers={offers}
    onOfferMouseOver={onOfferMouseOver}
    onOfferNameClick={onOfferNameClick} />
  );
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferMouseOver: PropTypes.func.isRequired,
  onOfferNameClick: PropTypes.func.isRequired
};

export default OfferList;
