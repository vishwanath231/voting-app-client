import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <div className='pt-28 pb-10 bg-gray-100 min-h-screen'>
                <div className='flex justify-center items-center max-w-screen-lg px-4 my-0 mx-auto'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 w-full'>
                        <div className='w-full p-5 bg shadow-lg flex justify-center items-center max-w-screen-md px-10 my-0 mx-auto'>
                            <Link to='/user/nominationList' className='block text-center bg-white rounded shadow duration-700 px-4 py-2.5 shadow-white hover:shadow-[#34508D] hover:bg-[#34508D] hover:text-white'>Nomination Details</Link>
                        </div>
                        <div className='w-full p-5 bg__two shadow-lg flex justify-center items-center max-w-screen-md px-10 my-0 mx-auto'>
                            <Link to='/user/vote' className='block text-center bg-white rounded shadow duration-700 px-4 py-2.5 shadow-white hover:shadow-[#34508D] hover:bg-[#34508D] hover:text-white'>Vote Form</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen;
