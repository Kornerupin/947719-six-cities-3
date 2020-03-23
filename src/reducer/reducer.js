import {offersMock} from '../mocks/offers';
import {ActionType} from '../reducer/actions';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const cities = offersMock ? [...new Set(offersMock.map((offer) => offer.city))]
.concat([`Dusseldorf`, `Berlin`, `Rome`, `Prague`, `Vienna`, `Brussels`]) : null;

const initialState = {
  offer: null,
  offers: offersMock,
  cities,
  city: `Amsterdam`,
  activeCoordinate: [],
  currentSortOption: `Popular`
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
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
