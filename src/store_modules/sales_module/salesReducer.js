import { GET_SALES } from './constants';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: null,
};

const salesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SALES.START_FETCH:
      return { ...state, isFetching: true };
    case GET_SALES.FINISH_FETCH:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: null,
      };
    case GET_SALES.FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default salesReducer;
