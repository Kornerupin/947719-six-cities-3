import OfferDetail from './offer-detail';

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

const offersArray = [
  {
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
  },
  {
    id: 2,
    city: `Brussels`,
    image: [`img/room.jpg`],
    type: `Private room`,
    price: `132`,
    rating: 1.8,
    name: `Wood and stone place`,
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [{
      avatar: `https://api.adorable.io/avatars/128/0.3963321309597061`,
      name: `Wax`,
      rating: 3.8,
      text: `Very nice hotel, helpful and friendly staff (thank you guys for everything), good breakfast, clean and comfy room.`,
      time: 1576868903507
    }]
  }];

it(`<OfferDetail /> should render detail offer`, () => {
  const tree = renderer.create(<OfferDetail
    offer={offerObject}
    offers={offersArray}
    onOfferNameClick={() => { }}
    currentCoordinate={[0, 0]}
  />,
  {
    createNodeMock: () => {
      return document.createElement(`div`);
    }
  }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
