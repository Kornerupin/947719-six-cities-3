import Offer from "../offer/offer.connect";
import {OfferProperties} from "../../proptypes/properties";

const OffersList = (props) => {

  const {offersByCity} = props;

  const offers = offersByCity.length > 0 ? offersByCity : props.offers;
    
  return offers.map((offer, index) =>
    <Offer
      key={`offer-${index}`}
      offer={offer}
    />
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
};

export default OffersList;
