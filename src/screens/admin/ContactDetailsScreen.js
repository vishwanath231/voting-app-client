import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContactDetails } from '../../redux/actions/adminActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { TbArrowBackUp } from 'react-icons/tb';

const ContactDetailsScreen = ({ getContactDetails, contactDetails }) => {
    
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getContactDetails(id)
        }

    }, [getContactDetails, id])

    const { loading, contact, error } = contactDetails;
   

    return (
        <div className='w-full bg-gray-100 min-h-screen'>
            <div className='px-4 max-w-screen-xl mx-auto'>
                <div className='py-10'>
                    <Link to='/admin/contactList' className='block flex items-center uppercase w-fit bg-[#34508D] shadow-lg rounded px-4 py-2 text-white text-sm'><TbArrowBackUp className='mr-1' />Back</Link>
                    { loading ? <Loader /> : error ? <Message error msg={error} /> : 
                        (
                            <>
                               { contact?.user?.name && <div className='text-center my-10 text-2xl font-medium uppercase'>{ contact?.user?.name }</div> }
                                
                                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-y-4'>
                                    <div className='w-full p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>Contact details</div>
                                        <div className='p-4'>
                                            { contact?.contact?._id && <div className='py-1'><span className='font-bold text-[#34508D]'>ID :</span> { contact?.contact?._id }</div>} 
                                            { contact?.contact?.username && <div className='py-1'><span className='font-bold text-[#34508D]'>USERNAME :</span> { contact?.contact?.username }</div> }
                                            { contact?.contact?.email && <div className='py-1'><span className='font-bold text-[#34508D]'>EMAIL :</span> { contact?.contact?.email }</div> } 
                                            { contact?.contact?.subject && <div className='py-1 font-bold'><span className='font-bold text-[#34508D]'>SUBJECT :</span> { contact?.contact?.subject }</div> } 
                                            { contact?.contact?.message && <div className='py-1'><span className='font-bold text-[#34508D]'>MESSAGE :</span></div> } 
                                            { contact?.contact?.message && <div className='py-1 bg-gray-100 p-4 rounded font-bold'>{ contact?.contact?.message }</div> } 
                                            { contact?.contact?.createdAt && <div className='py-1'><span className='font-bold text-[#34508D]'>TIME :</span> { contact?.contact?.createdAt }</div> }
                                        </div>
                                    </div>
                                    <div className='col-span-2 p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>peronal details</div>
                                        <div className='grid lg:grid-cols-2 grid-cols-1 p-4 lg:gap-x-4'>
                                            <div className=''>
                                                { contact?.user?._id && <div className='py-1'><span className='font-bold text-[#34508D]'>ID :</span> { contact?.user?._id }</div>} 
                                                { contact?.user?.reg_no && <div className='py-1'><span className='font-bold text-[#34508D]'>REG NO :</span> { contact?.user?.reg_no }</div> }
                                                { contact?.user?.name && <div className='py-1'><span className='font-bold text-[#34508D]'>NAME :</span> { contact?.user?.name }</div> }
                                                { contact?.user?.email && <div className='py-1'><span className='font-bold text-[#34508D]'>EMAIL :</span> { contact?.user?.email }</div> } 
                                                { contact?.user?.phone_no && <div className='py-1'><span className='font-bold text-[#34508D]'>PHONE :</span> { contact?.user?.phone_no }</div> }
                                            </div>
                                            <div className=''>
                                                { contact?.user?.birth_date && <div className='py-1'><span className='font-bold text-[#34508D]'>BIRTH DATE :</span> { contact?.user?.birth_date }</div> }
                                                { contact?.user?.community && <div className='py-1'><span className='font-bold text-[#34508D]'>COMMUNITY :</span> { contact?.user?.community }</div> }
                                                { contact?.user?.gender && <div className='py-1'><span className='font-bold text-[#34508D]'>GENDER :</span> { contact?.user?.gender }</div> }
                                                { contact?.user?.parent_name && <div className='py-1'><span className='font-bold text-[#34508D]'>PARENT NAME :</span> { contact?.user?.parent_name }</div> }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>location details</div>
                                        <div className='p-4'>
                                            { contact?.user?.address?.city && <div className='py-1'><span className='font-bold text-[#34508D]'>CITY :</span> { contact?.user?.address?.city }</div> }
                                            { contact?.user?.address?.district && <div className='py-1'><span className='font-bold text-[#34508D]'>DISTRICT :</span> { contact?.user?.address?.district }</div> }
                                            { contact?.user?.address?.pincode && <div className='py-1'><span className='font-bold text-[#34508D]'>PINCODE :</span> { contact?.user?.address?.pincode }</div> }
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
    contactDetails: state.contactDetails,
})

export default connect(mapStateToProps, { getContactDetails })(ContactDetailsScreen);