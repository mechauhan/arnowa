import axios from 'axios';

const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: 'USER_REGISTER_REQUEST',
    payload: { name, email, password },
  });
  try {
    const { data } = axios
      .post('http://localhost:5002/user/register', { name, email, password })
      .then((res) => {
        // localStorage.setItem('accessToken', res.data.data.token);
      });
    dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
    });
  }
};

const login = (email, password) => async (dispatch) => {
  dispatch({
    type: 'USER_LOGIN_REQUEST',
    payload: { email, password },
  });
  try {
    const { data } = axios
      .post('http://localhost:5002/user/login', { email, password })
      .then((res) => {
        console.log(res);
        // localStorage.setItem('accessToken', res.data.data.token);
      });
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
    });
  }
};

export { register, login };
