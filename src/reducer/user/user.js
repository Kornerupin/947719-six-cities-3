import { ErrorType } from '../../consts';
import { updateObject } from '../../utils';

const initialState = {
  userStatus: `NO_AUTH`,
  userLogin: ``,
  userPassword: ``
};

const ActionType = {
  SET_USER_STATUS: `SET_USER_STATUS`,
  SET_USER_LOGIN: `SET_USER_LOGIN`,
  SET_USER_PASSWORD: `SET_USER_PASSWORD`
};

const ActionCreator = {
  setUserStatus: (status) => {
    return {
      type: ActionType.SET_USER_STATUS,
      payload: status
    };
  },
  setUserLogin: (login) => {
    return {
      type: ActionType.SET_USER_LOGIN,
      payload: login
    };
  },
  setUserPassword: (password) => {
    return {
      type: ActionType.SET_USER_PASSWORD,
      payload: password
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_STATUS:
      return updateObject(state, {
        userStatus: action.payload
      });
    case ActionType.SET_USER_LOGIN:
      return updateObject(state, {
        userLogin: action.payload
      });
    case ActionType.SET_USER_PASSWORD:
      return updateObject(state, {
        userPassword: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setUserStatus(`AUTH`));
      }).catch((error) => {
        error.response.status === ErrorType.BABREQUEST &&
        dispatch(ActionCreator.setUserStatus(`NO_AUTH`));
      });
  },

  sendSignInData: (userData) => (dispatch, getState, api) => {    
    return api.post(`/login`, {
      email: userData.login,
      password: userData.password,
    }).then((response) => {
      console.log(response.config.data);
      dispatch((ActionCreator.setUserStatus(`AUTH`)));
    }).catch((error) => {      
      error.response.status === ErrorType.BABREQUEST &&
        dispatch(ActionCreator.setUserStatus(`NO_AUTH`));
    });
  },

  setUserLogin: (login) => (dispatch) => {
    dispatch(ActionCreator.setUserLogin(login));
  },

  setUserPassword: (password) => (dispatch) => {    
    dispatch(ActionCreator.setUserPassword(password));
  }

};

export { ActionCreator, ActionType, Operation, reducer };
