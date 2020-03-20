import ReviewsList from './reviews-list.jsx';

const reviews = [
  {
    avatar: `https://api.adorable.io/avatars/128/0.9912918678423135`,
    name: `Max`,
    rating: 4.1,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    time: 1569006474313
  }
];

it(`ReviewsList should render list of reviews`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
