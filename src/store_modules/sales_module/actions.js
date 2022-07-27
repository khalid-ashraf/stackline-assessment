import { GET_SALES } from './constants';
import response from '../../mock/data.json';

export const startFetchSales = () => ({
  type: GET_SALES.START_FETCH,
});

export const failFetchSales = (error) => ({
  type: GET_SALES.FAIL,
  payload: error,
});

export const finishFetchSales = (data) => ({
  type: GET_SALES.FINISH_FETCH,
  payload: data,
});

//Mock Api
const fetchData = async (url) => {
  // const resp = await fetch(url, {});
  // return resp.json()
  return response; // response data is used from provided mock data
};

//try catch can be used when real endpoint is available
export const fetchSales = (url) => async (dispatch) => {
  dispatch(startFetchSales());

  //try {
  const data = await fetchData(url);
  dispatch(finishFetchSales(response));
  // } catch (error) {
  //   dispatch(failFetchSales(error));
  // }
};
