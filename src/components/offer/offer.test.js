import Offer from './offer';

const offerObject = {
  id: 1,
  city: `Amsterdam`,
  image: [
    `img/apartment-01.jpg`
  ],
  type: `Apartment`,
  price: `80`,
  rating: 3.1,
  name: `Beautiful &amp; luxurious apartment at great location`,
  coordinates: [52.3909553943508, 4.85309666406198],
  reviews: [{
    avatar: `https://api.adorable.io/avatars/128/0.9912918678423135`,
    name: `Max`,
    rating: 4.1,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    time: 1569006474313
  }]
};

it(`<Offer /> Should render one offer`, () => {
  const tree = renderer.create(
      <Offer
        offer={offerObject}
        onOfferMouseOver={() => { }}
        onOfferNameClick={() => { }}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
