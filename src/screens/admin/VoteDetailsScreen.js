import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVoteDetails } from '../../redux/actions/adminActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { TbArrowBackUp } from 'react-icons/tb';

const VoteDetailsScreen = ({ getVoteDetails, voteDetails }) => {
    
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getVoteDetails(id)
        }

    }, [getVoteDetails, id])

    const { loading, vote, error } = voteDetails;
   

    return (
        <div className='w-full bg-gray-100 min-h-screen'>
            <div className='px-4 max-w-screen-xl mx-auto'>
                <div className='py-10'>
                    <Link to='/admin/voteList' className='block flex items-center uppercase w-fit bg-[#34508D] shadow-lg rounded px-4 py-2 text-white text-sm'><TbArrowBackUp className='mr-1' />Back</Link>
                    { loading ? <Loader /> : error ? <Message error msg={error} /> : 
                        (
                            <>
                               { vote?.user?.name && <div className='text-center my-10 text-2xl font-medium uppercase'>{ vote?.user?.name }</div> }
                                
                                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-y-4'>
                                    <div className='w-full p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>Vote details</div>
                                        <div className='p-4'>
                                            { vote?.vote?._id && <div className='py-1'><span className='font-bold text-[#34508D]'>ID :</span> { vote?.vote?._id }</div>} 
                                            { vote?.vote?.reg_no && <div className='py-1'><span className='font-bold text-[#34508D]'>REG NO :</span> { vote?.vote?.reg_no }</div> }
                                            { vote?.vote?.vote && <div className='py-1'><span className='font-bold text-[#34508D]'>VOTE :</span> { vote?.vote?.vote }</div> } 
                                            { vote?.vote?.createdAt && <div className='py-1'><span className='font-bold text-[#34508D]'>TIME :</span> { vote?.vote?.createdAt }</div> }
                                        </div>
                                    </div>
                                    <div className='col-span-2 p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>personal details</div>
                                        <div className='grid lg:grid-cols-2 grid-cols-1 p-4 lg:gap-x-4'>
                                            <div className=''>
                                                { vote?.user?._id && <div className='py-1'><span className='font-bold text-[#34508D]'>ID :</span> { vote?.user?._id }</div>} 
                                                { vote?.user?.reg_no && <div className='py-1'><span className='font-bold text-[#34508D]'>REG NO :</span> { vote?.user?.reg_no }</div> }
                                                { vote?.user?.name && <div className='py-1'><span className='font-bold text-[#34508D]'>NAME :</span> { vote?.user?.name }</div> }
                                                { vote?.user?.email && <div className='py-1'><span className='font-bold text-[#34508D]'>EMAIL :</span> { vote?.user?.email }</div> } 
                                                { vote?.user?.phone_no && <div className='py-1'><span className='font-bold text-[#34508D]'>PHONE :</span> { vote?.user?.phone_no }</div> }
                                            </div>
                                            <div className=''>
                                                { vote?.user?.birth_date && <div className='py-1'><span className='font-bold text-[#34508D]'>BIRTH DATE :</span> { vote?.user?.birth_date }</div> }
                                                { vote?.user?.community && <div className='py-1'><span className='font-bold text-[#34508D]'>COMMUNITY :</span> { vote?.user?.community }</div> }
                                                { vote?.user?.gender && <div className='py-1'><span className='font-bold text-[#34508D]'>GENDER :</span> { vote?.user?.gender }</div> }
                                                { vote?.user?.parent_name && <div className='py-1'><span className='font-bold text-[#34508D]'>PARENT NAME :</span> { vote?.user?.parent_name }</div> }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full p-4 bg-white shadow rounded'>
                                        <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>location details</div>
                                        <div className='p-4'>
                                            { vote?.user?.address?.city && <div className='py-1'><span className='font-bold text-[#34508D]'>CITY :</span> { vote?.user?.address?.city }</div> }
                                            { vote?.user?.address?.district && <div className='py-1'><span className='font-bold text-[#34508D]'>DISTRICT :</span> { vote?.user?.address?.district }</div> }
                                            { vote?.user?.address?.pincode && <div className='py-1'><span className='font-bold text-[#34508D]'>PINCODE :</span> { vote?.user?.address?.pincode }</div> }
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
    voteDetails: state.voteDetails,
})

export default connect(mapStateToProps, { getVoteDetails })(VoteDetailsScreen);