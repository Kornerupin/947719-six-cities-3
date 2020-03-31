import Offer from "../offer/offer.connect";
import {OfferProperties} from "../../proptypes/properties";

const  OffersList = React.memo(function  OffersList({offers}) {
    
  return offers.map((offer, index) =>
    <Offer
      key={`offer-${index}`}
      offer={offer}
    />
  );
});

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
};

export default OffersList;
