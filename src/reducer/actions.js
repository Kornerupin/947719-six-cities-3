export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  SHOW_ACTIVE_PIN: `SHOW_ACTIVE_PIN`,
  SHOW_OFFER: `SHOW_OFFER`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORT_OPTION: `CHANGE_SORT_OPTION`
};

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
    payload: currentCoordinate,
  }),
  showOffer: (offer) => ({
    type: ActionType.SHOW_OFFER,
    payload: offer
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortOptions: (currentSortOption) => ({
    type: ActionType.CHANGE_SORT_OPTION,
    payload: currentSortOption,
  }),
};
