import Card from "../card/card";
import {OfferProperties} from "../../properties.js";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onCardNameClick} = this.props;

    return offers.map((card, index) => <Card
      key={index}
      card={card}
      onCardMouseOver={(offer) => {
        this.setState(() => (offer));
      }}
      onCardNameClick={onCardNameClick} />);
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  onCardMouseOver: PropTypes.func.isRequired,
  onCardNameClick: PropTypes.func.isRequired
};

export default OfferList;
