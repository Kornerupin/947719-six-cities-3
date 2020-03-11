import {offersMock, cities} from '../mocks/offers';
import {ActionType} from '../reducer/actions';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

// state
const initialState = {
  offers: offersMock,
  offer: null,
  cities,
  city: cities[3],
  activePin: null
};

export const reducer = (state = initialState, action) => {
        
  switch (action.type) {
    case ActionType.SHOW_ACTIVE_PIN:
      return extend(state, {
        activePin: action.payload
      });
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
