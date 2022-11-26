import React from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/img/logo.jpg';
// import Loader from '../../../components/Loader';
// import Message from '../../../components/Message';


const UserContactScreen = () => {

    const handleChange = e => {

    }

    const handleSubmit = e => {

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
                <h2 className='text-4xl font-light uppercase mb-8'>Contact</h2> 
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="fromEmail" className="block mb-2 text-sm font-medium text-gray-900">Your Email <span className='text-red-500 text-base'>*</span></label>
                        <input 
                            type="email" 
                            id="fromEmail" 
                            name='fromEmail' 
                            onChange={handleChange}
                            value=''
                            placeholder="subject here"
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
                            value=''
                            placeholder="subject here"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message <span className='text-red-500 text-base'>*</span></label>
                        <textarea id='message' name='message' className="shadow-sm resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 p-2.5"></textarea>
                    </div>
                    <button type="submit" className="text-white shadow-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send</button>
                </form>
            </div>
        </main>
    )
}

export default UserContactScreen;