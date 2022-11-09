import React from 'react';
import { Link } from 'react-router-dom';
import IMAGE from '../../assets/svg/401.svg';

const UnauthorizedPage = () => {
    return (
        <div className='container w-full min-h-screen bg-gray-50'>
            <div className='flex justify-center mx-auto'>
                <img src={ IMAGE } width='400' alt='401 UnAuthorized' />
            </div>
            <div className='text-center tracking-wide mont-font'>
                <div className='text-7xl font-black text-[#34508D] mb-4'>401</div>
                <div className='text-3xl font-bold'>UnAuthorized</div>
            </div>
            <p className='text-center font-medium'>Something Missing</p>
            <div className='mt-7 text-center'>
                <Link to='/' className='mt-3 py-2 text-base mont-font px-5 rounded bg-[#34508D] text-white shadow-md'>Go Back</Link>
            </div>
        </div>
    )
}

export default UnauthorizedPage;