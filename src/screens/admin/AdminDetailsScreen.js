import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAdminDetails } from '../../redux/actions/adminActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { TbArrowBackUp } from 'react-icons/tb';


const AdminDetailsScreen = ({ adminDetails, getAdminDetails }) => {

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getAdminDetails(id)
        }
    }, [getAdminDetails, id])

    const { loading, admin, error } = adminDetails;

    return (
        <div className='w-full bg-gray-100 min-h-screen'>
            <div className='px-4 max-w-screen-xl mx-auto'>
                <div className='py-10'>
                    <Link to='/admin/all' className='block flex items-center uppercase w-fit bg-[#34508D] shadow-lg rounded px-4 py-2 text-white text-sm'><TbArrowBackUp className='mr-1' />Back</Link>
                    { loading ? <Loader /> : error ? <Message error msg={error} /> : 
                        (
                            <>
                                <div className='text-center my-10 text-2xl font-medium uppercase'>{admin?.name}</div>

                                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-y-4'>
                                    <div className='col-span-2 p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>peronal details</div>
                                        <div className='grid lg:grid-cols-2 grid-cols-1 p-4 lg:gap-x-4'>
                                            <div className=''>
                                                { admin?._id && <div className='py-1'><span className='font-bold text-[#34508D]'>ID :</span> { admin?._id }</div>} 
                                                { admin?.name && <div className='py-1'><span className='font-bold text-[#34508D]'>NAME :</span> { admin?.name }</div> }
                                                { admin?.email && <div className='py-1'><span className='font-bold text-[#34508D]'>EMAIL :</span> { admin?.email }</div> } 
                                                { admin?.phone_no && <div className='py-1'><span className='font-bold text-[#34508D]'>PHONE :</span> { admin?.phone_no }</div> }
                                            </div>
                                            <div className=''>
                                                { admin?.birth_date && <div className='py-1'><span className='font-bold text-[#34508D]'>BIRTH DATE :</span> { admin?.birth_date }</div> }
                                                { admin?.community && <div className='py-1'><span className='font-bold text-[#34508D]'>COMMUNITY :</span> { admin?.community }</div> }
                                                { admin?.gender && <div className='py-1'><span className='font-bold text-[#34508D]'>GENDER :</span> { admin?.gender }</div> }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>location details</div>
                                        <div className='p-4'>
                                            { admin?.address?.city && <div className='py-1'><span className='font-bold text-[#34508D]'>CITY :</span> { admin?.address?.city }</div> }
                                            { admin?.address?.taluk && <div className='py-1'><span className='font-bold text-[#34508D]'>CITY :</span> { admin?.address?.taluk }</div> }
                                            { admin?.address?.post && <div className='py-1'><span className='font-bold text-[#34508D]'>CITY :</span> { admin?.address?.post }</div> }
                                            { admin?.address?.district && <div className='py-1'><span className='font-bold text-[#34508D]'>DISTRICT :</span> { admin?.address?.district }</div> }
                                            { admin?.address?.pincode && <div className='py-1'><span className='font-bold text-[#34508D]'>PINCODE :</span> { admin?.address?.pincode }</div> }
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    adminDetails: state.adminDetails
})

export default connect(mapStateToProps, { getAdminDetails })(AdminDetailsScreen);
