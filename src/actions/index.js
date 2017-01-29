import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  //submit email and password to server
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password });
  }
  // if request is good,
  // * update state to indicate user is authenticated
  // * save jwt token
  // * redirect

  // if request is bad
  // * show error
}
