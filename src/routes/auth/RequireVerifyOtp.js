import React from 'react';
import { connect } from 'react-redux';
import { useLocation,  Navigate, Outlet } from 'react-router-dom';


const RequireVerifyOtp = ({ verifyOtp }) => {

    const location = useLocation();

    const { info } = verifyOtp; 

    return (
        info
        ? <Outlet />
        : <Navigate to='/' state={{ from: location }} replace />
    )
}

const mapStateToProps = (state) => ({
    verifyOtp: state.verifyOtp
})

export default connect(mapStateToProps,null)(RequireVerifyOtp)