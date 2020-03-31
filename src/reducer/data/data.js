import {FilterType} from '../../consts';
import {extend} from '../../utils';
import Adapter from '../../adapter';

const initialState = {
  offer: {},
  offers: [],
  cities: [],
  city: ``,
  currentCoordinate: [],
  currentFilter: `Popular`,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  SHOW_ACTIVE_PIN: `SHOW_ACTIVE_PIN`,
  UPDATE_OFFER: `UPDATE_OFFER`,
  SET_CITY: `SET_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  SORT_OFFERS_BY_FILTER: `SORT_OFFERS_BY_FILTER`,
};

const ActionCreator = {
    loadOffers: (offers) => ({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    }),
    getCities: (cities) => ({
      type: ActionType.GET_CITIES,
      payload: cities,
    }),
    showActivePin: (currentCoordinate) => ({
      type: ActionType.SHOW_ACTIVE_PIN,
      payload: getCoordinates(currentCoordinate),
    }),
    updateOffer: (offer) => ({
      type: ActionType.UPDATE_OFFER,
      payload: offer
    }),
    setCity: (city) => ({
      type: ActionType.SET_CITY,
      payload: city
    }),
    changeFilterOptions: (currentFilter) => ({
      type: ActionType.CHANGE_FILTER,
      payload: currentFilter,
    }),
    sortOffersByFilter: (offers, currentFilter) => ({
      type: ActionType.SORT_OFFERS_BY_FILTER,
      payload: sortOffersByFilter(offers, currentFilter),
    }),
  };

const sortOffersByFilter = (offers, currentFilter) => {
  switch (currentFilter) {
    case FilterType.LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case FilterType.HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case FilterType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

const getCoordinates = (currentCoordinate) => (currentCoordinate);

const reducer = (state = initialState, action) => {
    
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
    case ActionType.UPDATE_OFFER:
      return extend(state, {
        offer: action.payload
      });
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload
      });
    case ActionType.SORT_OFFERS_BY_FILTER:
      return extend(state, {
        offers: action.payload
      });
  }

  return state;
};

const Operation = {
    queryData: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {        
        const offers = response.data.map((offer) => Adapter.parse(offer));
        dispatch(ActionCreator.loadOffers(offers));
        dispatch(ActionCreator.getCities(offers));
        dispatch(ActionCreator.setCity(getState().DATA.cities[0]));
      });
  }
}

export {Operation, ActionType, ActionCreator, reducer};