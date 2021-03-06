import * as api from '../api/index.js'

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.loginUser({userData: userData});
    dispatch({ type: 'VERIFY_USER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}