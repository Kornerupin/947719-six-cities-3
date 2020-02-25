import Card from "../card/card";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { offers, onCardNameClick } = this.props;

    return offers.map((card, index) => <Card
      key={index}
      card={card}
      onCardMouseOver={(offer) => { this.setState(() => (offer)) }}
      onCardNameClick={onCardNameClick} />);
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
  ),
  onCardNameClick: PropTypes.func
};

export default OfferList;
