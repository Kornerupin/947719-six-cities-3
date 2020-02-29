import Main from './main';
import offers from '../../mocks/offers';

it(`Expected an Array`, () => {
  shallow(<Main
    offers={offers}
    onCardMouseOver={() => { }}
    onCardNameClick={() => { }}
  />);

  offers.map((offer) => {
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
