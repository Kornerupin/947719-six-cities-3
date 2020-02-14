import Card from './card';
import mockCards from '../../mocks/mock-cards';

const card = mockCards[0];

it(`It expect an Object that contains the following properties`, () => {
  shallow(<Card
    card={card}
  />);

  expect(card).toEqual(
      expect.objectContaining({
        name: expect.any(String)
      })
  );

});
