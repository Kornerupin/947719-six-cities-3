export const ActionType = {
  SHOW_OFFER: `SHOW_OFFER`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const ActionCreator = {
  showOffer: (offer) => ({
    type: ActionType.SHOW_OFFER,
    payload: offer
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
};
