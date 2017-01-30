import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signupUser({email, password}) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
    .then((response) => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
    })
    .catch(({ response }) => dispatch(authError(response.data.error)));
  }
}

export function signinUser({ email, password }) {
  //submit email and password to server
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    // if request is good,
    .then((response) => {

      // * update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });

      // * save jwt token
      localStorage.setItem('token', response.data.token);

      // * redirect to authorized section
      browserHistory.push('/feature');
    })
    .catch(()=> {
      // if request is bad show error
      dispatch(authError('Bad Login Info'));
    });
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER,
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function fetchMessage() {
  return dispatch => {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') },
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      });
    });
  };
};
