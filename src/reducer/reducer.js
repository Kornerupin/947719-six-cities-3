import { ActionType } from '../reducer/actions';
import { extend } from '../utils';

const initialState = {
  offer: {},
  offers: [],
  cities: [],
  city: `Amsterdam`,
  currentCoordinate: [],
  currentFilter: `Popular`,
  offersByCity: [],
  offersByFilter: []
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.GET_CITIES:
      return extend(state, {
        cities: [...new Set(action.payload.map((offer) => offer.city))]
      });
    case ActionType.SHOW_ACTIVE_PIN:
      return extend(state, {
        currentCoordinate: action.payload
      });
    case ActionType.SHOW_OFFER:
      return extend(state, {
        offer: action.payload
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload
      });
    case ActionType.SORT_OFFERS_BY_CITY:
      return extend(state, {
        offersByCity: action.payload
      });
    case ActionType.SORT_OFFERS_BY_FILTER:
      return extend(state, {
        offersByFilter: action.payload
      });
  }

  return state;
};
