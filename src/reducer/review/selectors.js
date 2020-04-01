import NameSpace from "../name-space.js";
import {createSelector} from "reselect";
import {LoadingStatus, REVIEWS_MAX} from "../../consts";

const NAME_SPACE = NameSpace.REVIEW;

export const sortByDate = (state) => {
  return state[NameSpace.DATA].offer.reviews.slice()
  .sort((a, b) => b.date - a.date).slice(0, REVIEWS_MAX);
}
export const getReviews = (state) => state[NAME_SPACE].reviews;
export const getReviewError = (state) => state[NAME_SPACE].reviewError;
export const getLoadingStatus = (state) => state[NAME_SPACE].loadingStatus;

export const isLoadingStatus = createSelector(
    getLoadingStatus,
    (loadingStatus) => {
      return loadingStatus === LoadingStatus.LOADING;
    }
);

export const isSuccessStatus = createSelector(
    getLoadingStatus,
    (loadingStatus) => {
      return loadingStatus === LoadingStatus.SUCCESS;
    }
);
