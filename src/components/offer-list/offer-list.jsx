import Offer from "../offer/offer";
import { OfferProperties } from "../../properties.js";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {offer: null};
  }

  render() {
    const { offers, onOfferNameClick } = this.props;

    return offers.map((offer, index) => <Offer
      key={index}
      offer={offer}
      onOfferMouseOver={() => this.setState(() => { offer: offer })}
      onOfferNameClick={onOfferNameClick} />
    )
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  onOfferMouseOver: PropTypes.func.isRequired,
  onOfferNameClick: PropTypes.func.isRequired
};

export default OfferList;
