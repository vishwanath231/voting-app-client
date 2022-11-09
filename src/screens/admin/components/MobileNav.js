import React,{ useState } from 'react';
import LOGO from '../../../assets/img/logo.jpg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import './main.css'
import ModelBox from './model/ModelBox';


const MobileNav = () => {
    
    
    const [ hamburger, setHamburger ] = useState(false);
    const handleHamburger = () => setHamburger(!hamburger)

    return (
        <div className='mobile__nav px-4 py-2 bg-white sen-font shadow'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to='/admin/dashboard'>
                        <img src={LOGO} className='w-28' alt='logo' />
                    </Link>
                </div>
                <div className='flex items-center'>
                    <ModelBox />
                    <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" onClick={handleHamburger}>
                        <BsThreeDotsVertical className={!hamburger ? "text-2xl text-black" : "hidden" } />
                        <IoClose className={!hamburger ? "hidden" : "text-2xl text-black" } />
                    </button>
                </div>
            </div>
            <div className={!hamburger ? "hidden" : "mobile__menu w-full"}>
                <MenuItem />
            </div> 
        </div>
    )
}

export default MobileNav;