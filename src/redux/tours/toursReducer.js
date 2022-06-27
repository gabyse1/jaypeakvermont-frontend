const baseURL = 'https://localhost:3001/api/v1';

const GET_TOURS_FROM_API = 'GET_TOURS_FROM_API';

const initialState = [];

const getToursAPI = () => async (dispatch) => {
  await fetch(`${baseURL}/tours`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_TOURS_FROM_API,
        payload: data,
      });
    });
};

const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURS_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  getToursAPI,
};

export default toursReducer;
