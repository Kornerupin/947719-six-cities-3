import {FilterType} from '../consts';

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  SHOW_ACTIVE_PIN: `SHOW_ACTIVE_PIN`,
  SHOW_OFFER: `SHOW_OFFER`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  SORT_OFFERS_BY_CITY: `SORT_OFFERS_BY_CITY`,
  SORT_OFFERS_BY_FILTER: `SORT_OFFERS_BY_FILTER`,
};

const sortOffersByCity = (offers, city) => {  
  return offers.filter((element) => element.city === city)
}

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

export const getOffer = (currentOffer) => (currentOffer);
export const getCoordinates = (currentCoordinate) => (currentCoordinate);

export const ActionCreator = {
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
  showOffer: (offer) => ({
    type: ActionType.SHOW_OFFER,
    payload: getOffer(offer)
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

