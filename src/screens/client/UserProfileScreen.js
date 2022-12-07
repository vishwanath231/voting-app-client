import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { TbArrowBackUp } from 'react-icons/tb';


const UserProfileScreen = ({ auth }) => {

   const { loading, info, error } = auth;
    
    
    return (
        <>
            <Navbar />
            <div className='pt-28 pb-10 bg-gray-100 min-h-screen'>
                <div className='px-4 max-w-screen-xl mx-auto'>
                <div className='py-10'>
                    <Link to='/home' className='block flex items-center uppercase w-fit bg-[#34508D] shadow-lg rounded px-4 py-2 text-white text-sm'><TbArrowBackUp className='mr-1' />Back</Link>
                    { loading ? <Loader /> : error ? <Message error msg={error} /> : 
                        info?.map((user) => (
                        
                            <div key={user._id}>
                                <div className='text-center my-10 text-2xl font-medium uppercase'>{user?.name}</div>

                                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-y-4'>
                                    <div className='col-span-2 p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>personal details</div>
                                        <div className='grid lg:grid-cols-2 grid-cols-1 p-4 lg:gap-x-4'>
                                            <div>
                                                { user?._id && <div className='py-1'><span className='font-bold text-[#34508D]'>ID :</span> { user?._id }</div>} 
                                                { user?.reg_no && <div className='py-1'><span className='font-bold text-[#34508D]'>REG NO :</span> { user?.reg_no }</div> }
                                                { user?.name && <div className='py-1'><span className='font-bold text-[#34508D]'>NAME :</span> { user?.name }</div> }
                                                { user?.email && <div className='py-1'><span className='font-bold text-[#34508D]'>EMAIL :</span> { user?.email }</div> } 
                                            </div>
                                            <div>
                                                { user?.phone_no && <div className='py-1'><span className='font-bold text-[#34508D]'>PHONE :</span> { user?.phone_no }</div> }
                                                { user?.community && <div className='py-1'><span className='font-bold text-[#34508D]'>COMMUNITY :</span> { user?.community }</div> }
                                                { user?.gender && <div className='py-1'><span className='font-bold text-[#34508D]'>GENDER :</span> { user?.gender }</div> }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>location details</div>
                                        <div className='p-4'>
                                            { user?.address?.city && <div className='py-1'><span className='font-bold text-[#34508D]'>CITY :</span> { user?.address?.city }</div> }
                                            { user?.address?.district && <div className='py-1'><span className='font-bold text-[#34508D]'>DISTRICT :</span> { user?.address?.district }</div> }
                                            { user?.address?.pincode && <div className='py-1'><span className='font-bold text-[#34508D]'>PINCODE :</span> { user?.address?.pincode }</div> }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        ))
                    }
                </div>
            </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(UserProfileScreen);
