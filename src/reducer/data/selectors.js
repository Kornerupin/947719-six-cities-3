import NameSpace from '../../reducer/name-space';

export const getOffersByCity = (state) => {  
    return state[NameSpace.DATA].offers.filter((offer) => offer.city === state[NameSpace.DATA].city);
  };
