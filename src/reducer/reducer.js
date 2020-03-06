import { offersMock, cities } from '../mocks/offers';
import { ActionType } from '../reducer/actions';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const initialState = {
  offers: offersMock,
  offer: null,
  cities: cities
};

export const reducer = (state = initialState, action) => {
    // console.log(`action.payload:`);
  // console.log(action.payload);
  // console.log(`action.type: ${action.type}`);

  switch (action.type) {
    case ActionType.SHOW_OFFER:
      return extend(state, {
        offer: action.payload
      });
  }

  return state;
};

