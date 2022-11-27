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




export const contactListReducer = (state = { contacts: [] }, { type, payload }) => {

    switch (type) {
        case USER_CONTACT_LIST_REQUEST:
            return {
                loading: true,
            }
        
        case USER_CONTACT_LIST_SUCCESS:
            return {
                loading: false,
                contacts: payload
            }

        case USER_CONTACT_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}


export const contactDetailsReducer = (state = { contact:{} }, { type, payload }) => {

    switch (type) {
        case USER_CONTACT_DETAILS_REQUEST:
            return {
                loading: true,
            }
        
        case USER_CONTACT_DETAILS_SUCCESS:
            return {
                loading: false,
                contact: payload
            }

        case USER_CONTACT_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}


export const contactDeleteReducer = (state = { }, { type, payload }) => {

    switch (type) {
        case USER_CONTACT_DELETE_REQUEST:
            return {
                loading: true,
            }
        
        case USER_CONTACT_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case USER_CONTACT_DELETE_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}



export const adminListReducer = (state = { admins: [] }, { type, payload }) => {

    switch (type) {
        case ADMIN_LIST_REQUEST:
            return {
                loading: true,
            }
        
        case ADMIN_LIST_SUCCESS:
            return {
                loading: false,
                admins: payload
            }

        case ADMIN_LIST_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}


export const adminDetailsReducer = (state = { admin:{} }, { type, payload }) => {

    switch (type) {
        case ADMIN_DETAILS_REQUEST:
            return {
                loading: true,
            }
        
        case ADMIN_DETAILS_SUCCESS:
            return {
                loading: false,
                admin: payload
            }

        case ADMIN_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }

        default:
            return state;
    }
}