export const ConnectionSettings = {
  TIMEOUT: 5000,
  URL: `https://htmlacademy-react-3.appspot.com/six-cities`
}

export const FilterType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

export const FIRST_CITY = 0;
export const DEFAULT_FILTER = FilterType.POPULAR;

export const UserStatus = {
  NO_AUTH: `NO_AUTH`,
  LOADING: `LOADING`,
  AUTH: `AUTH`
}

export const ErrorType = {
  UNAUTHORIZED: 401,
  BADREQUEST: 400
}

export const REVIEWS_MAX = 10;
export const RatingValues = [`5`, `4`, `3`, `2`, `1`];

export const LoadingStatus = {
  DEFAULT: `DEFAULT`,
  SUCCESS: `SUCCESS`,
  LOADING: `LOADING`,
  ERROR: `ERROR`
}