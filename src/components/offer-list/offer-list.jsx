import Card from "../card/card";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return (
      offers.map((card, index) =>
        <Card
          key={index}
          card={card}
          onCardMouseOver={ (card) => {
            this.setState(() => (card));
          } }
        />)
    );
  }
}

export default OfferList;
