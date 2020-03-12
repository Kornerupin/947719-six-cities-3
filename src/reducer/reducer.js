import {offersMock} from '../mocks/offers';
import {ActionType} from '../reducer/actions';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const cities = [...new Set(offersMock.map((offer)  => offer.city))]
.concat([`Dusseldorf`,`Berlin`,`Rome`,`Prague`,`Vienna`,`Brussels`]);

const initialState = {
  offers: offersMock,
  offer: null,
  cities: cities,
  city: `Amsterdam`,
  activePin: null,
  isSortOpened: false,
  currentOption: `Popular`
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
    case ActionType.TOGGLE_SORT_OPTIONS:
      return extend(state, {
        isSortOpened: action.payload
      });
    case ActionType.CHANGE_SORT_OPTION:
      return extend(state, {
        currentOption: action.payload
      });
  }

  return state;
};
