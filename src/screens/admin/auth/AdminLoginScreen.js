import React,{ useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../../assets/img/logo.jpg';
import { connect } from 'react-redux';
import { adminLogin } from '../../../redux/actions/authActions';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';


const AdminLoginScreen = ({ adminLoginInfo, adminLogin }) => {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    
    const { loading, info, error } = adminLoginInfo;


    useEffect(() => {
      
        if (info && info?.role && info?.role === 'admin') {
            navigate('/admin/dashboard')
        }

    }, [info, navigate])
    


    const handleChange = e => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        adminLogin(loginData)
    }


    return (
        <main className='screen__height'>
            <div className='px-4 max-w-3xl my-9 mx-auto'>
                <div className='flex justify-center items-center mb-14'>
                    <Link to='/' className='text-center'>
                        <img src={LOGO} alt="logo" className='w-40' />
                    </Link>
                </div>
                {loading && <Loader />}
                <h2 className='text-4xl font-light uppercase mb-8'>Administrator Login</h2> 
                {error && <Message error msg={error} />}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="email" 
                            id="email" 
                            name='email' 
                            onChange={handleChange}
                            value={loginData.email}
                            placeholder="example@support.com"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="password" 
                            id="password" 
                            name='password' 
                            onChange={handleChange}
                            value={loginData.password}
                            placeholder="*****"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login account</button>
                </form>
                <div className='mt-4 mb-2'>
                    <Link to='/' className='underline text-blue-800'>User Login</Link>
                </div>   
            </div>
        </main>
        
    )
}

const mapToStateProps = (state) => ({
    adminLoginInfo: state.adminLoginInfo
})


export default connect(mapToStateProps, { adminLogin })(AdminLoginScreen);