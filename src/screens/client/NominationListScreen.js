import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { connect } from 'react-redux';
import { getUserViewNominationList } from '../../redux/actions/userActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';


const NominationListScreen = ({ getUserViewNominationList, userViewNominationList }) => {
   
   
    useEffect(() => {
        getUserViewNominationList()
    }, [getUserViewNominationList])

    const { loading, nominations, error } = userViewNominationList

    
    return (
        <>
            <Navbar />
            <div className='pt-28 pb-10 bg-gray-100 min-h-screen'>
                <div className='max-w-screen-lg px-10 my-0 mx-auto'>
                     <Link to='/home' className='block flex items-center w-fit bg-[#34508D] shadow-lg rounded px-4 py-2 text-white text-sm'>
                     <BiHomeAlt className='mr-1' />Home
                     </Link>
                </div>
                <div className='max-w-screen-md px-10 my-0 mx-auto'>
                    
                    <div className='text-3xl font-bold text-center mt-5 mb-10'>Nomination List</div>
                    { loading ? <Loader /> : error ? <Message error msg={error} /> : (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        
                            {nominations.map((val) => (
                                 <Link to={`/user/nomination/${val._id}`} className='flex justify-center items-center flex-col' key={val._id}>
                                    <div className='bg-white shadow p-4 rounded-md shadow-white'>
                                        <div className='w-60 h-60'>
                                            <img src={val.profile} className='w-full h-full object-cover' alt='nomination profile' />
                                        </div>
                                        <div className='text-center mt-2'>{val.name}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    userViewNominationList: state.userViewNominationList
}) 

export default connect(mapStateToProps, { getUserViewNominationList })(NominationListScreen);
