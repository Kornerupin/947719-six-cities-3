import Main from './main';
import {offersMock} from '../mocks/offers';

it(`Expected an Array`, () => {
  shallow(<Main
    offers={offersMock}
    onOfferMouseOver={() => { }}
    onOfferNameClick={() => { }}
  />);

  offersMock.map((offer) => {
    expect(offer).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        city: expect.any(String),
        image: expect.arrayContaining([expect.any(String)]),
        type: expect.any(String),
        price: expect.any(String),
        rating: expect.any(Number),
        name: expect.any(String)
      })
    );
  });

});
