import {FilterType} from '../../consts';
import {extend} from '../../utils';
import Adapter from '../../adapter';

const initialState = {
  offer: {},
  offers: [],
  cities: [],
  city: `Amsterdam`,
  currentCoordinate: [],
  currentFilter: `Popular`,
  offersByCity: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  SHOW_ACTIVE_PIN: `SHOW_ACTIVE_PIN`,
  UPDATE_OFFER: `UPDATE_OFFER`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  SORT_OFFERS_BY_CITY: `SORT_OFFERS_BY_CITY`,
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
    changeCity: (city) => ({
      type: ActionType.CHANGE_CITY,
      payload: city
    }),
    changeFilterOptions: (currentFilter) => ({
      type: ActionType.CHANGE_FILTER,
      payload: currentFilter,
    }),
    sortOffersByCity: (offers, city) => ({
      type: ActionType.SORT_OFFERS_BY_CITY,
      payload: sortOffersByCity(offers, city),
    }),
    sortOffersByFilter: (offers, currentFilter) => ({
      type: ActionType.SORT_OFFERS_BY_FILTER,
      payload: sortOffersByFilter(offers, currentFilter),
    }),
  };

const sortOffersByCity = (offers, city) => {
  return offers.filter((element) => element.city === city);
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
        offersByCity: action.payload
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
        dispatch(ActionCreator.sortOffersByCity(offers, getState().city));
      });
  }
}

export {Operation, ActionType, ActionCreator, reducer};