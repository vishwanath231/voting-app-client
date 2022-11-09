import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

// CLIENT
import LoginScreen from '../screens/client/auth/LoginScreen';
import UserGenerateOtpScreen from '../screens/client/auth/UserGenerateOtpScreen';
import VerifyOtpScreen from '../screens/client/auth/VerifyOtpScreen';
import HomeScreen from '../screens/client/HomeScreen';
import VoteFormScreen from '../screens/client/VoteFormScreen';
import NominationListScreen from '../screens/client/NominationListScreen';
import UNominationDetailsScreen from '../screens/client/UNominationDetailsScreen';
import UserProfileScreen from '../screens/client/UserProfileScreen';


// ADMIN
import AdminLoginScreen from '../screens/admin/auth/AdminLoginScreen';
import DashboardScreen from '../screens/admin/DashboardScreen';
import VoteListScreen from '../screens/admin/VoteListScreen';
import VoteDetailsScreen from '../screens/admin/VoteDetailsScreen';
import UserListScreen from '../screens/admin/UserListScreen';
import UserDetailsScreen from '../screens/admin/UserDetailsScreen';
import AdminNominationListScreen from '../screens/admin/AdminNominationListScreen';
import NominationDetailsScreen from '../screens/admin/NominationDetailsScreen';
import AnalysisScreen from '../screens/admin/AnalysisScreen';
import AdminProfileScreen from '../screens/admin/AdminProfileScreen';


// AUTH 
import RouterLayout from './auth/RouterLayout';
import RequireAuth from './auth/RequireAuth';
import RequireLogin from './auth/RequireLogin';
import RequireGenerateOtp from './auth/RequireGenerateOtp';
import RequireVerifyOtp from './auth/RequireVerifyOtp';

// PAGES
import NotFoundPage from './pages/NotFoundPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import NominationFormScreen from '../screens/admin/NominationFormScreen';


const Router = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <RouterLayout /> } >
               
                    {/* CLIENT */}
                    <Route path='/' element={<LoginScreen /> } />

                    <Route path='admin/login' element={ <AdminLoginScreen /> }  />


                    <Route element={ <RequireAuth allowRoles={'user'} /> }>

                        <Route element={ <RequireLogin /> } >
                            <Route path='generate' element={<UserGenerateOtpScreen /> } />
                        </Route>

                        <Route element={ <RequireGenerateOtp /> } >
                            <Route path='verify' element={<VerifyOtpScreen /> } />
                        </Route>

                        <Route element={ <RequireVerifyOtp /> } >
                            <Route path='home' element={<HomeScreen /> } />
                        </Route>
                        
                        <Route path='user/vote' element={<VoteFormScreen /> } />
                        <Route path='user/nominationList' element={<NominationListScreen /> } />
                        <Route path='user/nomination/:id' element={<UNominationDetailsScreen /> } />
                        <Route path='user/profile' element={<UserProfileScreen /> } />
                    </Route>

                
                    {/* AUTH */}
                    <Route path='unAuth' element={<UnauthorizedPage /> } />


                    {/* ADMIN */}
                    <Route element={ <RequireAuth allowRoles={'admin'} /> } >
                        <Route path='admin/dashboard' element={ <DashboardScreen /> } /> 
                        <Route path='admin/profile' element={ <AdminProfileScreen /> } /> 
                        <Route path='admin/voteList' element={ <VoteListScreen /> } /> 
                        <Route path='admin/vote/:id' element={ <VoteDetailsScreen /> } /> 
                        <Route path='admin/userList' element={ <UserListScreen /> } /> 
                        <Route path='admin/user/:id' element={ <UserDetailsScreen /> } /> 
                        <Route path='admin/nomination/add' element={ <NominationFormScreen /> } /> 
                        <Route path='admin/nominationList' element={ <AdminNominationListScreen /> } /> 
                        <Route path='admin/nomination/:id' element={ <NominationDetailsScreen /> } /> 
                        <Route path='admin/analysis' element={ <AnalysisScreen /> } /> 
                    </Route>


                    {/* NOT FOUND PAGE */}
                    <Route path='*' element={ <NotFoundPage /> } />

                </Route>
            </Routes>
            {/* <CopyRights /> */}
        </HashRouter>
    )
}

export default Router;
