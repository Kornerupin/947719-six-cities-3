const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    image: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    type: `Apartment`,
    price: `80`,
    rating: 3.1,
    name: `Beautiful &amp; luxurious apartment at great location`,
    coords: [52.3909553943508, 4.85309666406198],
    reviews: [{
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Max`,
      rating: 4.1,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      time: `April 2019`
    },
    {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Sax`,
      rating: 4.5,
      text: `It is my favorite hotel. I have been staying her for several years and can confirm that service level remains at the same high level.`,
      time: `April 2019`
    },
    {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Rax`,
      rating: 3.8,
      text: `Emplacement parfait, beaucoup de commerces à proximité, le tout dans un lieu traditionnel et agréable, j'ai adoré mon court séjour et aimerait beaucoup y retourner un jour!`,
      time: `April 2019`
    }]
  },
  {
    image: [`img/room.jpg`],
    type: `Private room`,
    price: `132`,
    rating: 1.8,
    name: `Wood and stone place`,
    coords: [52.369553943508, 4.85309666406198],
    reviews: [{
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Wax`,
      rating: 3.8,
      text: `Very nice hotel, helpful and friendly staff (thank you guys for everything), good breakfast, clean and comfy room.`,
      time: `May 2019`
    }]
  },
  {
    image: [`img/apartment-02.jpg`],
    type: `Apartment`,
    price: `180`,
    rating: 3.8,
    name: `Canal View Prinsengracht`,
    coords: [52.3909553943508, 4.929309666406198],
    reviews: [{
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Tax`,
      rating: 4.5,
      text: `Breakfast was excellent. Everything was really tasty. Location perfect, in a walking distance from everything. Staff was friendly and welcoming. Hotel was really silent.`,
      time: `June 2019`
    }]
  },
  {
    image: [`img/apartment-03.jpg`],
    type: `Apartment`,
    price: `80`,
    rating: 4.5,
    name: `Nice, cozy, warm big bed apartment`,
    coords: [52.3809553943508, 4.939309666406198],
    reviews: [{
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Bax`,
      rating: 3.2,
      text: `The only drawback for me was that I could hear the traffic through the window in my room. It was therefore not often i opened the window to get fresh air.`,
      time: `July 2019`
    }]
  },
];
