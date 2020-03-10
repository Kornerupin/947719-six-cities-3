import Offer from "../offer/offer";
import {OfferProperties} from "../../proptypes/properties";

const OfferList = ({offers, onOfferNameClick}) => {

  return offers.map((offer, index) => <Offer
    key={index}
    offer={offer}
    onOfferMouseOver={() => { }}
    onOfferNameClick={onOfferNameClick} />
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  onOfferMouseOver: PropTypes.func.isRequired,
  onOfferNameClick: PropTypes.func.isRequired
};

export default OfferList;
