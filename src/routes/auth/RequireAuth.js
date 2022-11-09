import React,{ useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
 

const RequireAuth = ({ userLoginInfo, adminLoginInfo, allowRoles }) => {


    const [role, setRole] = useState([{
        name: '',
    }]);

    const location = useLocation();

    const { info:authRole } = userLoginInfo; 

    const { info:adminRole } = adminLoginInfo; 


    useEffect(() => {

        if (authRole && authRole.role) {
            setRole([{ name: authRole.role }])

        }else{
            
            if (adminRole && adminRole.role) {
                setRole([{ name: adminRole.role }])
            }else{
                setRole([{ }])
            }
        }
        
    }, [authRole, adminRole])


    return (
        role.find(val => allowRoles.includes(val.name))
        ? <Outlet />
        : authRole?.role
        ? <Navigate to='/unAuth' state={{ from: location }} replace />
        : <Navigate to='/' state={{ from: location }} replace />
    )
}


const mapStateToProps = (state) => ({
    userLoginInfo: state.userLoginInfo,
    adminLoginInfo: state.adminLoginInfo
})


export default connect(mapStateToProps, null)(RequireAuth);