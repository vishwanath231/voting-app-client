import React, { useCallback, useEffect, useState } from 'react';
import LOGO from '../../assets/img/logo.jpg';
import { FaRegUser } from 'react-icons/fa';
import UserModel from './components/UserModel'
import './Navbar.css';

const Navbar = () => {

    const [ profile, setProfile] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);
    

    const handleProfile = () => {
        setProfile(!profile)
    }


    const handleScroll = () => {
        
        const offset = window.pageYOffset;

        if (offset > 7) {
            setScrolled(true)
        }else {
            setScrolled(false)
        }
    }

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && profile) {
            setProfile(false);
            }
        },[setProfile, profile]
    );


    useEffect(() => {
        
        window.addEventListener('scroll', handleScroll)
    })
    
    
    useEffect(() => {
        
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },[keyPress]);



    // const removeProfile = () => {
    //     if (profile) {
    //         setProfile(false)
    //     }
    // }


    return (
        <div  className={scrolled ? "nav-scroll shadow-md bg-white px-4 sm:px-4 py-4" : "bg-white shadow px-4 sm:px-4 py-4 nav-container "}>
            <div className='flex justify-between items-center'>
                <div className='w-24'>
                    <img src={LOGO} alt='app logo' /> 
                </div>
                <div className='model__btn'>
                    <button type="button"   onClick={handleProfile}>
                        <FaRegUser  className='text-2xl hover:text-[#34508D]'/>
                    </button>
                    <UserModel profile={profile} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
