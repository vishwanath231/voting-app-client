import React, { useState } from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/img/logo.jpg';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { userContacts } from '../../redux/actions/userActions'

const UserContactScreen = ({ userContacts, userContact }) => {

    const [data, setData] = useState({
        email: '',
        subject: '',
        message: ''
    })


    const { loading, info, error } = userContact;

    const handleChange = e => {

        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        userContacts(data)

        setData({
            email: '',
            subject: '',
            message: ''
        })
    }


    return (
        <main className='screen__height'>
            <div className='px-4 max-w-3xl my-9 mx-auto'>
                <Link to='/home' className='block flex items-center uppercase w-fit bg-[#34508D] shadow-lg rounded px-4 py-2 text-white text-sm'><TbArrowBackUp className='mr-1' />Back</Link>
                <div className='flex justify-center items-center mb-14'>
                    <Link to='/home' className='text-center'>
                        <img src={LOGO} alt="logo" className='w-40' />
                    </Link>
                </div>
                {loading && <Loader />}
                {error && <Message error msg={error} />}
                {info && <Message success msg={info.msg} />}
                <h2 className='text-4xl font-light uppercase mb-8'>Contact</h2> 
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="email" 
                            id="email" 
                            name='email' 
                            onChange={handleChange}
                            value={data.email}
                            placeholder="example@support.com"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="text" 
                            id="subject" 
                            name='subject' 
                            onChange={handleChange}
                            value={data.subject}
                            placeholder="subject here"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message <span className='text-red-500 text-base'>*</span></label>
                        <textarea 
                            id='message' 
                            name='message'
                            onChange={handleChange}
                            value={data.message} 
                            className="shadow-sm resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 p-2.5"
                        ></textarea>
                    </div>
                    <button type="submit" className="text-white shadow-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send</button>
                </form>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => ({
    userContact: state.userContact
})

export default connect(mapStateToProps, { userContacts })(UserContactScreen);