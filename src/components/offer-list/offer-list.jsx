import Offer from "../Offer/offer";
import {OfferProperties} from "../../offer-properties.js";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onOfferNameClick} = this.props;

    return offers.map((offer, index) => <Offer
      key={index}
      offer={offer}
      onOfferMouseOver={() => {
        this.setState(() => (offer));
      }}
      onOfferNameClick={onOfferNameClick} />);
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  onOfferMouseOver: PropTypes.func.isRequired,
  onOfferNameClick: PropTypes.func.isRequired
};

export default OfferList;
