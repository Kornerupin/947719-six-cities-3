import Card from "../card/card";

const OfferList = (props) => {
    const { offers } = props;

    return (
        offers.map((card, index) => <Card key={index} card={card} />)
    )
}

export default OfferList;
