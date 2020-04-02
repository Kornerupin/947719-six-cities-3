import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.USER;

export const getAuthStatus = (state) => state[NAME_SPACE].authStatus

export const isLoadingStatus = createSelector(
  getAuthStatus,
    (userStatus) => {
      return userStatus === UserStatus.AUTH;
    }
);

