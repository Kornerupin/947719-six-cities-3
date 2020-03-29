import Offer from "../offer/offer.connect";
import {OfferProperties} from "../../proptypes/properties";

const OffersList = ({offersByCity}) => {

  return offersByCity.map((offer, index) =>
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
