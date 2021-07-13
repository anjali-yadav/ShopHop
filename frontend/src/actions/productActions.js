import {
    PRODUCT_LIST_FAILS,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILS,
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL
} from '../constants/productConstant';
import axios from 'axios';

export const listProducts = () =>async (dispatch) => {
    try {
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });
    } 
    catch (error) {
        dispatch ({
            type: PRODUCT_LIST_FAILS,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message,
        });
    }
};

export const listProductDetails = (id) =>async (dispatch) => {
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        });
    } 
    catch (error) {
        dispatch ({
            type: PRODUCT_DETAILS_FAILS,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message,
        });
    }
};

export const listTopProducts = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_TOP_REQUEST })
  
      const { data } = await axios.get(`/api/products/top`)
  
      dispatch({
        type: PRODUCT_TOP_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_TOP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
}