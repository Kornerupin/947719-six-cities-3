import {offersMock, cities} from '../mocks/offers';
import {ActionType} from '../reducer/actions';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const initialState = {
  offers: offersMock,
  offer: null,
  cities,
  city: cities[3]
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SHOW_OFFER:
      return extend(state, {
        offer: action.payload
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
  }

  return state;
};

