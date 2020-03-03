import Offer from './offer';
import offersMock from '../../mocks/offers-mock';

const offer = offersMock[0];

it(`It expect an Object that contains the following properties`, () => {
  shallow(<Offer
    offer={offer}
    onOfferMouseOver={() => { }}
    onOfferNameClick={() => { }}
  />);

  expect(offer).toEqual(
      expect.objectContaining({
        image: expect.arrayContaining([expect.any(String)]),
        type: expect.any(String),
        price: expect.any(String),
        name: expect.any(String)
      })
  );
});


it(`Should card name be clicked`, () => {
  const onOfferNameClick = jest.fn();
  const offerDetails = shallow(
      <Offer
        offer={offer}
        onOfferMouseOver={() => { }}
        onOfferNameClick={onOfferNameClick}
      />);

  offerDetails.find(`.place-card__name`).simulate(`click`);
  expect(onOfferNameClick).toHaveBeenCalledTimes(1);
});
