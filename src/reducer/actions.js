export const ActionType = {
  SHOW_ACTIVE_PIN: `SHOW_ACTIVE_PIN`,
  SHOW_OFFER: `SHOW_OFFER`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  TOGGLE_SORT_OPTIONS: `TOGGLE_SORT_OPTIONS`
};

export const ActionCreator = {
  showActivePin: (activePin) => ({
    type: ActionType.SHOW_ACTIVE_PIN,
    payload: activePin,
  }),
  showOffer: (offer) => ({
    type: ActionType.SHOW_OFFER,
    payload: offer
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  toggleSortOptions: (isOpened) => ({
    type: ActionType.TOGGLE_SORT_OPTIONS,
    payload: isOpened,
  }),  
};
