import {ErrorType} from '../../consts';
import {extend} from '../../utils';

const initialState = {
  authStatus: `NO_AUTH`,
};

const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
};

const ActionCreator = {
  setAuthStatus: (status) => {
    return {
      type: ActionType.SET_AUTH_STATUS,
      payload: status
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return extend(state, {
        authStatus: action.payload
      });
  }

  return state;
};

const Operation = {
checkAuth: () => (dispatch, getState, api) => {
  return api.get(`/login`)
    .then((response) => {      
      dispatch(ActionCreator.setAuthStatus(`NO_AUTH`));      
    }).catch((error) => {        
        dispatch((ActionCreator.setAuthStatus(`NO_AUTH`)));
    });
  }
};

export {ActionCreator, ActionType, Operation, reducer};
