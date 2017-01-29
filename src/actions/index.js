import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, UNAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  //submit email and password to server
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then((response) => {
      // if request is good,
      // * update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });

      // * save jwt token

      // * redirect to authorized section
      browserHistory.push('/feature');
    })
    .catch(()=> {

    });
  }
  // if request is good,
  // * update state to indicate user is authenticated
  // * save jwt token
  // * redirect

  // if request is bad
  // * show error
}
