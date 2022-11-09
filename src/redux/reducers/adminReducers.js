import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    NOMINATION_LIST_REQUEST,
    NOMINATION_LIST_SUCCESS,
    NOMINATION_LIST_FAIL,
    NOMINATION_LIST_RESET,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    NOMINATION_DETAILS_REQUEST,
    NOMINATION_DETAILS_SUCCESS,
    NOMINATION_DETAILS_FAIL,
    NEW_NOMINATION_REQUEST,
    NEW_NOMINATION_SUCCESS,
    NEW_NOMINATION_FAIL,
    VOTE_LIST_REQUEST,
    VOTE_LIST_SUCCESS,
    VOTE_LIST_FAIL,
    VOTE_DETAILS_REQUEST,
    VOTE_DETAILS_SUCCESS,
    VOTE_DETAILS_FAIL
} from '../constants/adminConstants';


export const userListReducer = (state = { users: [] }, { type, payload }) => {

    switch (type) {
        case USER_LIST_REQUEST:
            return {
                loading: true,
            }
        
        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: payload
            }

        case USER_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}


export const userDetailsReducer = (state = { user: {} }, { type, payload }) => {

    switch (type) {
        case USER_DETAILS_REQUEST:
            return {
                loading: true,
                user: {}
            }
        
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: payload
            }

        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}



export const newNominationReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case NEW_NOMINATION_REQUEST:
            return {
                loading: true,
                success: false
            }
        
        case NEW_NOMINATION_SUCCESS:
            return {
                loading: false,
                success: true,
                nomination: payload
            }

        case NEW_NOMINATION_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}




export const nominationListReducer = (state = { nominations: [] }, { type, payload }) => {

    switch (type) {
        case NOMINATION_LIST_REQUEST:
            return {
                loading: true,
                nominations: []
            }
        
        case NOMINATION_LIST_SUCCESS:
            return {
                loading: false,
                nominations: payload
            }

        case NOMINATION_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }

        case NOMINATION_LIST_RESET:
            return { 
                nominations: [] 
            }

        default:
            return state;
    }
}




export const nominationDetailsReducer = (state = { nomination: {} }, { type, payload }) => {

    switch (type) {
        case NOMINATION_DETAILS_REQUEST:
            return {
                loading: true,
                nomination: {}
            }
        
        case NOMINATION_DETAILS_SUCCESS:
            return {
                loading: false,
                nomination: payload
            }

        case NOMINATION_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}




export const voteListReducer = (state = { votes: [] }, { type, payload }) => {

    switch (type) {
        case VOTE_LIST_REQUEST:
            return {
                loading: true,
            }
        
        case VOTE_LIST_SUCCESS:
            return {
                loading: false,
                votes: payload
            }

        case VOTE_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}


export const voteDetailsReducer = (state = { vote:{} }, { type, payload }) => {

    switch (type) {
        case VOTE_DETAILS_REQUEST:
            return {
                loading: true,
            }
        
        case VOTE_DETAILS_SUCCESS:
            return {
                loading: false,
                vote: payload
            }

        case VOTE_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}