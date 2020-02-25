import Card from './card';
import offers from '../../mocks/offers';

const card = offers[0];

it(`It expect an Object that contains the following properties`, () => {
  shallow(<Card
    card={card}
    onCardMouseOver={() => { }}
    onCardNameClick={() => { }}
  />);

  expect(card).toEqual(
      expect.objectContaining({
        image: expect.arrayContaining([expect.any(String)]),
        type: expect.any(String),
        price: expect.any(String),
        name: expect.any(String)
      })
  );
});


it(`Should card name be clicked`, () => {
  const onCardNameClick = jest.fn();
  const offerDetails = shallow(
      <Card
        card={card}
        onCardMouseOver={() => { }}
        onCardNameClick={onCardNameClick}
      />);

  offerDetails.find(`.place-card__name`).simulate(`click`);
  expect(onCardNameClick).toHaveBeenCalledTimes(1);
});
