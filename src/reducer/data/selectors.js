import NameSpace from '../../reducer/name-space';

const NAME_SPACE = NameSpace.DATA;

export const getOffersByCity = (state) => {
  return state[NAME_SPACE].offers.filter((offer) => offer.city === state[NAME_SPACE].city);
};
export const getOffer = (state) => state[NAME_SPACE].offer;
export const getOfferId = (state) => state[NAME_SPACE].offer.id;
export const getCity = (state) => state[NAME_SPACE].city;
export const getCurrentCoordinate = (state) => state[NAME_SPACE].currentCoordinate;
export const getCurrentFilter = (state) => state[NAME_SPACE].currentFilter;

