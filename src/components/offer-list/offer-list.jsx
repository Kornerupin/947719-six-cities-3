import Card from "../card/card";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, _onCardNameClick} = this.props;

    if (offers) {

      const getOffers = offers.map((card, index) =>
        <Card
          key={index}
          card={card}
          _onCardMouseOver={(offer) => {
            this.setState(() => (offer));
          }}
          _onCardNameClick={_onCardNameClick}
        />);

      return (<> {getOffers} </>);
    }

    return null;
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
  _onCardNameClick: PropTypes.func
};

export default OfferList;
