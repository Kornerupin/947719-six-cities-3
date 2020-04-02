import {updateObject} from "../../utils.js";
import {ErrorType, LoadingStatus} from "../../consts";

const initialState = {
  userRating: 0,
  userReview: ``,
  reviewError: ``,
  loadingStatus: LoadingStatus.DEFAULT
};

const ActionType = {
  SET_USER_RATING: `SET_USER_RATING`,
  SET_USER_REVIEW: `SET_USER_REVIEW`,
  SET_REVIEW_ERROR: `SET_REVIEW_ERROR`,
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
};

const ActionCreator = {
  setUserRating: (rating) => {
    return {
      type: ActionType.SET_USER_RATING,
      payload: rating
    };
  },
  setUserReview: (review) => {
    return {
      type: ActionType.SET_USER_REVIEW,
      payload: review
    };
  },
  setReviewError: (message) => {
    return {
      type: ActionType.SET_REVIEW_ERROR,
      payload: message
    };
  },
  setLoadingStatus: (status) => {
    return {
      type: ActionType.SET_LOADING_STATUS,
      payload: status
    };
  }
};

const setUserRating = (state, action) => {
  return updateObject(state, {userRating: action.payload});
};

const setUserReview = (state, action) => {
  return updateObject(state, {userReview: action.payload});
};

const setReviewError = (state, action) => {
  return updateObject(state, {reviewError: action.payload});
};

const setLoadingStatus = (state, action) => {
  return updateObject(state, {loadingStatus: action.payload});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_RATING:
      return setUserRating(state, action);
    case ActionType.SET_USER_REVIEW:
      return setUserReview(state, action);
    case ActionType.SET_REVIEW_ERROR:
      return setReviewError(state, action);
    case ActionType.SET_LOADING_STATUS:
      return setLoadingStatus(state, action);
  }

  return state;
};

const Operation = {
  setUserRating: (rating) => (dispatch) => {
    dispatch(ActionCreator.setUserRating(rating));
  },

  setUserReview: (review) => (dispatch) => {
    dispatch(ActionCreator.setUserReview(review));
  },

  sendReview: (offerId, userReview) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, userReview)
    .then((response) => console.log(`POST`, response.config.data))
    .catch((error) => console.log(error.response.data.error))
  },
};

export {ActionCreator, ActionType, Operation, reducer};
