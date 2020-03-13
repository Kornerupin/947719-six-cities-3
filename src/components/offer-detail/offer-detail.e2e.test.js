import OfferDetail from './offer-detail';

const offersMock = [
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


it(`It expect an Object that contains the following properties`, () => {

  shallow(<OfferDetail
    offers={offersMock}
    offer={offersMock[0]}
    activeCoordinate={[0, 0]}
    onOfferMouseOver={() => { }}
    onOfferNameClick={() => { }}
  />);

  expect(offersMock[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        city: expect.any(String),
        image: expect.arrayContaining([expect.any(String)]),
        type: expect.any(String),
        price: expect.any(String),
        rating: expect.any(Number),
        name: expect.any(String),
        coordinates: expect.arrayContaining([expect.anything()]),
        reviews: expect.arrayContaining([expect.anything()]),
      })
  );
});
