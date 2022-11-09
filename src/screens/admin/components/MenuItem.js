import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { HiOutlineUsers} from 'react-icons/hi';
import { RiUser2Line } from 'react-icons/ri';
import { TbDashboard } from 'react-icons/tb';
import { MdOutlineHowToVote } from 'react-icons/md';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { BiLogOutCircle } from 'react-icons/bi';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/authActions';


const MenuItem = ({ logout }) => {

    const logoutHandler = () => {
        logout()
    }

    return (
        <div className='mt-7 md:mt-0'>

            <div className='mb-3'>
                <Link to='/admin/dashboard' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <TbDashboard className='text-xl text-[#34508D] mr-1' />
                        <p>Dashboard</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/voteList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <MdOutlineHowToVote className='text-xl text-[#34508D] mr-1' />
                        <p>Vote</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/userList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <HiOutlineUsers className='text-xl text-[#34508D] mr-1' />
                        <p>Users</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/nominationList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <RiUser2Line className='text-xl text-[#34508D] mr-1' />
                        <p>Nomination</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/analysis' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <TbDeviceAnalytics className='text-xl text-[#34508D] mr-1' />
                        <p>Analysis</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <button onClick={logoutHandler} className="block w-full py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <BiLogOutCircle className='text-xl text-[#34508D] mr-1' />
                        <p>Logout</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default connect(null, { logout })(MenuItem);
