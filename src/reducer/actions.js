export const ActionType = {
  SHOW_OFFER: `SHOW_OFFER`
};

export const ActionCreator = {
  showOffer: (offer) => ({
    type: ActionType.SHOW_OFFER,
    payload: offer
  })
};
