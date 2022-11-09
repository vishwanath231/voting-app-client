import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';


const userInfoFromStroage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const userPinFromStroage = localStorage.getItem('userPin') ? localStorage.getItem('userPin') : null;
const userVerifyFromStroage = localStorage.getItem('userVerify') ? localStorage.getItem('userVerify') : null;
const adminInfoFromStroage = localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null;

const initialState = {
    userLoginInfo: {
        info: userInfoFromStroage,
    },
    generateOtp:{
        info: userPinFromStroage
    },
    verifyOtp: {
        info: userVerifyFromStroage
    },

    adminLoginInfo: {
        info: adminInfoFromStroage
    }
};


const middleware = [thunk]

const mode = 'development'

const devTools =  mode !== "production" ?
composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware)

const store = createStore(
    
    reducers,
    initialState,
    devTools
)

export default store;
