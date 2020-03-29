import Offer from "../offer/offer.connect";
import {OfferProperties} from "../../proptypes/properties";

const OffersList = (props) => {

  const {
    offersByCity,
    offersByFilter,
  } = props;

  const offers = offersByFilter ? offersByFilter.length > 0 ? offersByFilter : offersByCity : offersByCity;
  
  return offers.map((offer, index) =>
  <Offer
    key={`offer-${index}`}
    {...offer}
    />
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
};

export default OffersList;