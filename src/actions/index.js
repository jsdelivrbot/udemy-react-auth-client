import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3090';

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
