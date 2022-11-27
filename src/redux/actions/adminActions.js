import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    NOMINATION_LIST_REQUEST,
    NOMINATION_LIST_SUCCESS,
    NOMINATION_LIST_FAIL,
    NOMINATION_DETAILS_REQUEST,
    NOMINATION_DETAILS_SUCCESS,
    NOMINATION_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    NEW_NOMINATION_REQUEST,
    NEW_NOMINATION_SUCCESS,
    NEW_NOMINATION_FAIL,
    VOTE_LIST_REQUEST,
    VOTE_LIST_SUCCESS,
    VOTE_LIST_FAIL,
    VOTE_DETAILS_REQUEST,
    VOTE_DETAILS_SUCCESS,
    VOTE_DETAILS_FAIL,
    USER_CONTACT_LIST_REQUEST,
    USER_CONTACT_LIST_SUCCESS,
    USER_CONTACT_LIST_FAIL,
    USER_CONTACT_DETAILS_REQUEST,
    USER_CONTACT_DETAILS_SUCCESS,
    USER_CONTACT_DETAILS_FAIL,
    USER_CONTACT_DELETE_REQUEST,
    USER_CONTACT_DELETE_SUCCESS,
    USER_CONTACT_DELETE_FAIL,
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    ADMIN_LIST_FAIL,
    ADMIN_DETAILS_REQUEST,
    ADMIN_DETAILS_SUCCESS,
    ADMIN_DETAILS_FAIL
} from '../constants/adminConstants';
import axios from 'axios';



export const getUserList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_LIST_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/user/list`, config)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_LIST_FAIL,
            payload: resErr
        }) 
    }
}


export const getUserDetails = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/user/${id}`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: resErr
        })  
    }
}




export const postNomination = (nominationData) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: NEW_NOMINATION_REQUEST
        })

        // const { adminLoginInfo: { info:adminInfo } } = getState();


        console.log(nominationData);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                
            }
        }

        const { data } = await axios.post(`/api/admin/nomination/add`, nominationData, config)

        dispatch({
            type: NEW_NOMINATION_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: NEW_NOMINATION_FAIL,
            payload: resErr
        })
    }
}



export const getNominationList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: NOMINATION_LIST_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/nomination/list`, config)

        dispatch({
            type: NOMINATION_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: NOMINATION_LIST_FAIL,
            payload: resErr
        })
    }
}



export const getNominationDetails = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: NOMINATION_DETAILS_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/nomination/${id}`, config)

        dispatch({
            type: NOMINATION_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: NOMINATION_DETAILS_FAIL,
            payload: resErr
        })
    }
}




export const getVoteList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: VOTE_LIST_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/vote`, config)

        dispatch({
            type: VOTE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: VOTE_LIST_FAIL,
            payload: resErr
        }) 
    }
}


export const getVoteDetails = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: VOTE_DETAILS_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/vote/${id}`, config)

        dispatch({
            type: VOTE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: VOTE_DETAILS_FAIL,
            payload: resErr
        }) 
    }
}




export const getContactList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_CONTACT_LIST_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/contact`, config)

        dispatch({
            type: USER_CONTACT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_CONTACT_LIST_FAIL,
            payload: resErr
        }) 
    }
}


export const getContactDetails = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_CONTACT_DETAILS_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/contact/${id}`, config)

        dispatch({
            type: USER_CONTACT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_CONTACT_DETAILS_FAIL,
            payload: resErr
        }) 
    }
}



export const deleteContact = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: USER_CONTACT_DELETE_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        await axios.delete(`/api/admin/contact/del/${id}`, config)

        dispatch({
            type: USER_CONTACT_DELETE_SUCCESS,
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: USER_CONTACT_DELETE_FAIL,
            payload: resErr
        }) 
    }
}



export const getAdminList = () => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: ADMIN_LIST_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/all`, config)

        dispatch({
            type: ADMIN_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: ADMIN_LIST_FAIL,
            payload: resErr
        }) 
    }
}


export const getAdminDetails = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: ADMIN_DETAILS_REQUEST
        })

        const { adminLoginInfo: { info:adminInfo } } = getState();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/admin/all/${id}`, config)

        dispatch({
            type: ADMIN_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {

        const resErr =  error.response && error.response.data.message ? error.response.data.message : error.message
        
        dispatch({
            type: ADMIN_DETAILS_FAIL,
            payload: resErr
        }) 
    }
}