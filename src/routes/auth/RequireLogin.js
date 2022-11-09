import React from 'react';
import { connect } from 'react-redux';
import { useLocation,  Navigate, Outlet } from 'react-router-dom';


const RequireLogin = ({ userLoginInfo }) => {

    const location = useLocation();

    const { info } = userLoginInfo; 

    return (
        info
        ? <Outlet />
        : <Navigate to='/' state={{ from: location }} replace />
    )
}

const mapStateToProps = (state) => ({
    userLoginInfo: state.userLoginInfo
})

export default connect(mapStateToProps,null)(RequireLogin)