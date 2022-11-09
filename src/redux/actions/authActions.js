import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    LOGOUT,
    USER_GENERATE_OTP_REQUEST,
    USER_GENERATE_OTP_SUCCESS,
    USER_GENERATE_OTP_FAIL,
    USER_VERIFY_OTP_REQUEST,
    USER_VERIFY_OTP_SUCCESS,
    USER_VERIFY_OTP_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    AUTH_LOADED_REQUEST,
    AUTH_LOADED_SUCCESS,
    AUTH_LOADED_FAIL
} from '../constants/authConstants';
import axios from 'axios';


export const authLoaded = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: AUTH_LOADED_REQUEST
        })

        const { verifyOtp: { info } } = getState();

        const { adminLoginInfo: { info:adminInfo } } = getState();


        if (info) {
            
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${info}`
                }
            }
    
            const { data } = await axios.get('/api/users/profile', config)
    
            dispatch({
                type: AUTH_LOADED_SUCCESS,
                payload: data
            })

        }else {

            if (adminInfo) {
            
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${adminInfo.token}`
                    }
                }
        
                const { data } = await axios.get('/api/admin/profile', config)
        
                dispatch({
                    type: AUTH_LOADED_SUCCESS,
                    payload: data
                })
            }

        }

    } catch (error) {

        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
 
        dispatch({
            type: AUTH_LOADED_FAIL,
            payload: message
        })
    }

    
}


export const userLogin = (loginData) => async (dispatch) => {
    
    try {
        
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/login', loginData, config)


        const authData = {
            token: data.token,
            role: data.data.role
        }

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: authData
        })

        localStorage.setItem('userInfo', JSON.stringify(authData))

    } catch (error) {

        
        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: resErr
        })
    }

}





export const userGenerateOTP = (datas) => async (dispatch, getState) => {
    
    try {
        
        dispatch({
            type: USER_GENERATE_OTP_REQUEST
        })

        const { userLoginInfo: { info } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${info.token}`
            }
        }

        const { data } = await axios.post('/api/users/pin', datas, config)


        dispatch({
            type: USER_GENERATE_OTP_SUCCESS,
            payload: data.token
        })

        localStorage.setItem('userPin', data.token)
        

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_GENERATE_OTP_FAIL,
            payload: resErr
        })
    }

}




export const userVerifyOTP = (datas) => async (dispatch, getState) => {
    
    try {
        
        dispatch({
            type: USER_VERIFY_OTP_REQUEST
        })

        const { generateOtp: { info } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${info}`
            }
        }

        const { data } = await axios.post('/api/users/verify', datas, config)


        dispatch({
            type: USER_VERIFY_OTP_SUCCESS,
            payload: data.token
        })

        localStorage.setItem('userVerify', data.token)
        dispatch(authLoaded())

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_VERIFY_OTP_FAIL,
            payload: resErr
        })
    }

}



export const adminLogin = (loginData) => async (dispatch) => {
    
    try {
        
        dispatch({
            type: ADMIN_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/admin/login', loginData, config)


        const authData = {
            token: data.token,
            role: data.data.role
        }

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: authData
        })

        localStorage.setItem('adminInfo', JSON.stringify(authData))

    } catch (error) {

        
        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: resErr
        })
    }

}



export const logout = () => (dispatch) => {

    dispatch({ type: LOGOUT })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('adminInfo')
    localStorage.removeItem('userPin')
    localStorage.removeItem('userVerify')
    document.location.href = '/';
}

