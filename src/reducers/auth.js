import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
  error: null,
  authenticated: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true , error: ''};
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload }
    default:
      return state;
  }
};
