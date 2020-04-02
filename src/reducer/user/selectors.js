import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.USER;

export const getUserStatus = (state) => state[NAME_SPACE].userStatus

export const isLoadingStatus = createSelector(
  getUserStatus,
    (userStatus) => {
      return userStatus === UserStatus.AUTH;
    }
);
export const getUserLogin = (state) => state[NAME_SPACE].userLogin;
export const getUserPassword= (state) => state[NAME_SPACE].userPassword;
