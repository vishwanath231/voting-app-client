import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    LOGOUT,
    USER_GENERATE_OTP_REQUEST,
    USER_GENERATE_OTP_SUCCESS,
    USER_GENERATE_OTP_FAIL,
    USER_VERIFY_OTP_REQUEST,
    USER_VERIFY_OTP_SUCCESS,
    USER_VERIFY_OTP_FAIL,
    AUTH_LOADED_REQUEST,
    AUTH_LOADED_SUCCESS,
    AUTH_LOADED_FAIL
} from '../constants/authConstants';


export const authLoadedReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case AUTH_LOADED_REQUEST:
            return {
                loading: true
            }
    
        case AUTH_LOADED_SUCCESS:
            return {
                loading: false,
                info: payload
            }
      
        case AUTH_LOADED_FAIL:
            return {
                loading: false,
                error: payload
            }
       
        default:
            return state;
    }
} 


export const userLoginReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
    
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                info: payload
            }
      
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: payload
            }
       
        case LOGOUT:
            return {}

        default:
            return state;
    }
} 



export const adminLoginReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ADMIN_LOGIN_REQUEST:
            return {
                loading: true
            }
    
        case ADMIN_LOGIN_SUCCESS:
            return {
                loading: false,
                info: payload
            }
      
        case ADMIN_LOGIN_FAIL:
            return {
                loading: false,
                error: payload
            }
       
        case LOGOUT:
            return {}

        default:
            return state;
    }
} 


export const userGenerateOtpReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case USER_GENERATE_OTP_REQUEST:
            return {
                loading: true
            }

        case USER_GENERATE_OTP_SUCCESS:
            return {
                loading: false,
                info: payload
            }

        case USER_GENERATE_OTP_FAIL:
            return {
                loading: false,
                error: payload
            }
    
        default:
            return state;
    }
}



export const userVerifyOtpReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case USER_VERIFY_OTP_REQUEST:
            return {
                loading: true
            }

        case USER_VERIFY_OTP_SUCCESS:
            return {
                loading: false,
                info: payload
            }

        case USER_VERIFY_OTP_FAIL:
            return {
                loading: false,
                error: payload
            }
    
        default:
            return state;
    }
}