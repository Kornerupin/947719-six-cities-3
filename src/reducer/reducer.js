import { ActionType } from '../reducer/actions';
import { extend } from '../utils';

const initialState = {
  offer: {},
  offers: [],
  cities: [],
  city: `Amsterdam`,
  activeCoordinate: [],
  currentSortOption: `Popular`
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
        activeCoordinate: action.payload
      });
    case ActionType.SHOW_OFFER:
      return extend(state, {
        offer: action.payload
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.CHANGE_SORT_OPTION:
      return extend(state, {
        currentSortOption: action.payload
      });
  }
  
  return state;
};
