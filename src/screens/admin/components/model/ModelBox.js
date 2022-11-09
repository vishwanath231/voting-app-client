import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import '../main.css';
import { connect } from 'react-redux';
import { logout } from '../../../../redux/actions/authActions';
import Loader from '../../../../components/Loader';


const ModelBox = ({ auth, logout  }) => {

    const [ profile, setProfile] = useState(false);

    const handleProfile = () => {
        setProfile(!profile)
    }

    const logoutHandler = () => {
        logout()
    }

    const { loading, info } = auth;

    return (
        <div className='adminModel__btn'>
            <button type="button"  onClick={handleProfile}>
                <FaRegUser className='text-2xl text-[#34508D]' /> 
            </button>
            <div className={ profile ? "z-50 my-4 text-base sen-font list-none bg-gray-100 rounded divide-y divide-gray-100 shadow  adminDashboard__model" : "hidden my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow " }>
                { 
                    loading ? <Loader /> : (
                        <>
                            
                            {info?.map((val) => (
                                <div className="py-3 px-4 text-md text-left" key={val._id}>
                                    <span className="block">{val && val.name }</span>
                                    <span className="block font-semibold truncate">{val && val.email}</span>
                                </div>
                            ))}
                            <ul className="py-1 text-md text-left">
                                <li>
                                    <Link to='/admin/profile' className="block py-2 px-4 hover:bg-gray-300 ">Profile</Link>
                                </li>
                                <li>
                                    <button onClick={logoutHandler} className="block py-2 text-left w-full px-4 hover:text-white hover:bg-red-500 ">Sign out</button>
                                </li>
                            </ul>
                        </>
                    )
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(ModelBox);
