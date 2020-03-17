export const ActionType = {
  SHOW_ACTIVE_PIN: `SHOW_ACTIVE_PIN`,
  SHOW_OFFER: `SHOW_OFFER`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORT_OPTION: `CHANGE_SORT_OPTION`
};

export const ActionCreator = {
  showActivePin: (activeCoordinate) => ({
    type: ActionType.SHOW_ACTIVE_PIN,
    payload: activeCoordinate,
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
