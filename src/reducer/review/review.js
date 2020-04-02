import {updateObject} from "../../utils.js";
import {ErrorType, LoadingStatus} from "../../consts";

const initialState = {
  reviews: [],
  reviewError: ``,
  loadingStatus: LoadingStatus.DEFAULT
};

const ActionType = {
  SET_REVIEWS: `SET_REVIEWS`,
  SET_REVIEW_ERROR: `SET_REVIEW_ERROR`,
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
};

const ActionCreator = {
  setReviews: (comments) => {
    return {
      type: ActionType.SET_REVIEWS,
      payload: comments
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

const setReviewError = (state, action) => {
  return updateObject(state, {reviewError: action.payload});
};

const setReviews = (state, action) => {
  return updateObject(state, {reviews: action.payload});
};

const setLoadingStatus = (state, action) => {
  return updateObject(state, {loadingStatus: action.payload});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS:
      return setReviews(state, action);
    case ActionType.SET_REVIEW_ERROR:
      return setReviewError(state, action);
    case ActionType.SET_LOADING_STATUS:
      return setLoadingStatus(state, action);
  }

  return state;
};

const Operation = {
  resetReviews: () => (dispatch) => {
    dispatch(ActionCreator.setReviews([]));
  },

  sendReview: (offerId, reviewData) => (dispatch, _getState, api) => {
    console.log(reviewData);
    
    dispatch(ActionCreator.setLoadingStatus(LoadingStatus.LOADING));
    return api.post(`/comment/${offerId}`, reviewData)
    .then((response) => {
      // dispatch(ActionCreator.setReviews(adaptCommentsResponse(response.data)));
      dispatch(ActionCreator.setLoadingStatus(LoadingStatus.SUCCESS));
    })
    .catch((err) => {
      const {response} = err;
      if (response.status === ErrorType.BADREQUEST) {
        dispatch(ActionCreator.setLoadingStatus(LoadingStatus.ERROR));
        dispatch(ActionCreator.setReviewError(response.data.error));
      }
    });
  },

  clearStatus: () => (dispatch) => {
    dispatch(ActionCreator.setLoadingStatus(LoadingStatus.DEFAULT));
  }
};

export {ActionCreator, ActionType, Operation, reducer};
