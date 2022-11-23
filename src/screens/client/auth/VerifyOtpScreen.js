import React,{ useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../../assets/img/logo.jpg';
import { connect } from 'react-redux';
import { userVerifyOTP, logout } from '../../../redux/actions/authActions';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';

const VerifyOtpScreen = ({ verifyOtp, userVerifyOTP, logout }) => {

    const navigate = useNavigate();

    const [data, setData] = useState({ 
        otp1: "", 
        otp2: "", 
        otp3: "", 
        otp4: "", 
    })

    const { loading, info, error } = verifyOtp;

    const handleChange = e => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    useEffect(() => {
      
        if (info) {
            navigate('/home')
        }

    }, [info, navigate])


    const handleSubmit = (e) => {
        e.preventDefault();

        const pinNumber = {
            pin: Object.values(data).join("")
        }

        userVerifyOTP(pinNumber);
    }
    
    const logoutHandler = () => {
        logout()
    }


    const inputfocus = (elmnt) => {

        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
          
            const next = elmnt.target.tabIndex - 2;

            console.log(next);

          if (next > -1) {
            elmnt.target.form.elements[next].focus()
          }
        }
        else {  
            const next = elmnt.target.tabIndex;
            
            if (next < 5) {
              elmnt.target.form.elements[next].focus()
            }
        }
    }

    const [ minutes, setMinutes ] = useState(2);
    const [seconds, setSeconds ] =  useState(0);


    useEffect(()=>{
        
        let myInterval = setInterval(() => {

            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                        
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
  
        return ()=> {
            clearInterval(myInterval);
        };
    });


    const HandlerResendOtp = () => {
        localStorage.removeItem('userPin')
        document.location.href = '/generate';
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
            <div className='text-4xl font-light uppercase mb-8'>Verification OTP</div>
            {error && <Message error msg={error} />}
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="pin" className="block mb-2 text-lg font-medium text-gray-900">OTP<span className='text-red-500 text-base'>*</span></label>
                    <div className='flex '>
                        <input
                            name="otp1"
                            type="text"
                            autoComplete="off"
                            className="shadow-sm bg-gray-50 text-center border border-gray-300 text-gray-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 md:w-16 p-2.5"
                            value={data.otp1}
                            onChange={handleChange}
                            tabIndex="1" 
                            maxLength="1" 
                            onKeyUp={e => inputfocus(e)}
                
                        />
                        <input
                            name="otp2"
                            type="text"
                            autoComplete="off"
                            className="mx-5 shadow-sm bg-gray-50 text-center border border-gray-300 text-gray-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 md:w-16 p-2.5"
                            value={data.otp2}
                            onChange={handleChange}
                            tabIndex="2" 
                            maxLength="1" 
                            onKeyUp={e => inputfocus(e)}
                
                        />
                        <input
                            name="otp3"
                            type="text"
                            autoComplete="off"
                            className="mr-5 shadow-sm bg-gray-50 text-center border border-gray-300 text-gray-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 md:w-16 p-2.5"
                            value={data.otp3}
                            onChange={handleChange}
                            tabIndex="3" 
                            maxLength="1" 
                            onKeyUp={e => inputfocus(e)}
                
                        />
                        <input
                            name="otp4"
                            type="text"
                            autoComplete="off"
                            className="shadow-sm bg-gray-50 text-center border border-gray-300 text-gray-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 md:w-16 p-2.5"
                            value={data.otp4}
                            onChange={handleChange}
                            tabIndex="4" 
                            maxLength="1" 
                            onKeyUp={e => inputfocus(e)}
                        />
                    </div>
                </div>
                <div className='flex justify-between items-center mb-5 max-w-md  '>
                    <p>DON'T RECEIVE OTP ? </p>
                { minutes === 0 && seconds === 0 ?
                    <button type="button" onClick={HandlerResendOtp} className='text-[#4361ee]'>RESENT OTP</button>
                    : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
                }
                </div>
                
                <div className='flex items-center sm:flex-row flex-col'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-fit sm:mr-3 mr-0 sm:mb-0 mb-3">Verify</button>
                    <button type="button" onClick={logoutHandler} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-fit">cancel</button>
                </div>
            </form>
        </div>
    </main>
    )
}

const mapStateToProps = (state) => ({
    verifyOtp: state.verifyOtp
})

export default connect( mapStateToProps, { userVerifyOTP, logout })(VerifyOtpScreen);
