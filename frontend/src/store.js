import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {
    productListReducer, 
    productDetailsReducer,
    productTopRatedReducer
} from './reducers/productReducer';

import { 
    cartReducer
} from './reducers/cartReducer';

import {
    userLoginReducer, 
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer
} from './reducers/userReducer';

import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer
} from './reducers/orderReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
});

// import getItem from 'react-redux';
// console.log(localStorage.getItem('cartItems'));

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'))
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const shippingAddressFromAddress = JSON.parse(localStorage.getItem('shippingAddress'))
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromAddress
    },
    userLogin: {userLogin: userInfoFromStorage},
}

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;