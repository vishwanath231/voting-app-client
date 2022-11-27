import { combineReducers } from 'redux';
import { 
    adminDetailsReducer,
    adminListReducer,
    contactDeleteReducer,
    contactDetailsReducer,
    contactListReducer,
    newNominationReducer,
    nominationDetailsReducer,
    nominationListReducer, 
    userDetailsReducer, 
    userListReducer,
    voteDetailsReducer,
    voteListReducer
} from './adminReducers';

import { 
    userLoginReducer, 
    adminLoginReducer, 
    userGenerateOtpReducer, 
    userVerifyOtpReducer, 
    authLoadedReducer
} from './authReducers';
import { 
    contactReducer,
    userViewNominationDetailsReducer, 
    userViewNominationListReducer, 
    voteReducer
} from './userReducers';

export const reducers = combineReducers({
    userLoginInfo: userLoginReducer,
    generateOtp: userGenerateOtpReducer,
    verifyOtp: userVerifyOtpReducer,
    auth: authLoadedReducer,
    userViewNominationList: userViewNominationListReducer,
    userViewNominationDetails: userViewNominationDetailsReducer,
    vote: voteReducer,
    userContact: contactReducer,

    adminLoginInfo: adminLoginReducer,
    userList: userListReducer,
    newNomination: newNominationReducer,
    nominationList: nominationListReducer,
    userDetails: userDetailsReducer,
    nominationDetails: nominationDetailsReducer,
    voteList: voteListReducer,
    voteDetails: voteDetailsReducer,
    contactList: contactListReducer,
    contactDetails: contactDetailsReducer,
    contactDelete: contactDeleteReducer,
    adminList: adminListReducer,
    adminDetails: adminDetailsReducer
})

