import Main from './main';
import offers from '../../mocks/offers';

const cards = offers;

it(`Expected an Array`, () => {
  shallow(<Main
    cards={cards}
    onCardMouseOver={() => { }}
    onCardNameClick={() => { }}
  />);

  cards.map((offer) => {
    expect(offer).toEqual(
        expect.objectContaining({
          image: expect.arrayContaining([expect.any(String)]),
          type: expect.any(String),
          price: expect.any(String),
          rating: expect.any(Number),
          name: expect.any(String)
        })
    );
  });

});
