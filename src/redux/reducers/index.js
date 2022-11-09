import { combineReducers } from 'redux';
import { 
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

    adminLoginInfo: adminLoginReducer,
    userList: userListReducer,
    newNomination: newNominationReducer,
    nominationList: nominationListReducer,
    userDetails: userDetailsReducer,
    nominationDetails: nominationDetailsReducer,
    voteList: voteListReducer,
    voteDetails: voteDetailsReducer
})

