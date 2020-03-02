import Main from './main';
import offersMock from '../../mocks/offers-mock';

it(`Expected an Array`, () => {
  shallow(<Main
    offers={offersMock}
    onOfferMouseOver={() => { }}
    onOfferNameClick={() => { }}
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
