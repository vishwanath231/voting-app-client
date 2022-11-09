import React from 'react';
import { connect } from 'react-redux';
import { useLocation,  Navigate, Outlet } from 'react-router-dom';


const RequireGenerateOtp = ({ generateOtp }) => {

    const location = useLocation();

    const { info } = generateOtp; 

    return (
        info
        ? <Outlet />
        : <Navigate to='/' state={{ from: location }} replace />
    )
}

const mapStateToProps = (state) => ({
    generateOtp: state.generateOtp
})

export default connect(mapStateToProps,null)(RequireGenerateOtp)