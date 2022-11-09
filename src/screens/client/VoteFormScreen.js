import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { BiHomeAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { userVote, getUserViewNominationList } from '../../redux/actions/userActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';


const VoteFormScreen = ({ auth, userVote, getUserViewNominationList, userViewNominationList, vote }) => {

    const navigate = useNavigate();
    
    
    const [voteData, setVoteData] = useState({
        id: '',
        reg_no: '',
        gender: '',
        community: '',
        location: '',
        vote: ''
    })
    
    const { loading:voteLoader,vote_info, success, error } = vote

    const { loading, info, error:authError } = auth;

    const { loading:load, nominations, error:nominationError } = userViewNominationList

    useEffect(() => {
        if (info) {
            info.map((val) => {
                return setVoteData({
                    id: val?._id,
                    reg_no: val?.reg_no?.toLowerCase(),
                    gender: val?.gender,
                    community: val?.community,
                    location: val?.address?.district
                })
           })
        }
        
        getUserViewNominationList()
        
        if(success){
            navigate('/home')
        }
        
    }, [info, getUserViewNominationList, success, navigate])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setVoteData({
            ...voteData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        userVote(voteData);
    }

    return (
        <>  {}
            <Navbar />
            <div className='pt-28 pb-10 bg-gray-100 min-h-screen'>
                <div className='max-w-screen-lg px-10 my-0 mx-auto'>
                    <Link to='/home' className='block flex items-center w-fit bg-[#34508D] hover:bg-black duration-700 shadow-lg rounded px-4 py-2 text-white text-sm'>
                        <BiHomeAlt className='mr-1' />Home
                    </Link>
                </div>
                <div className='max-w-lg my-0 mx-auto px-10'>
                    <div className='shadow p-10 my-10 rounded-md shadow-white bg-white'>
                        <div className='text-center text-2xl font-medium mb-6'>Vote Form</div>
                        {voteLoader && <Loader />}
                        {vote_info && <Message success msg={vote_info.msg} />}
                        {error && <Message error msg={error} />} 
                        {loading ? <Loader /> :  load ? <Loader /> : authError ? <Message error msg={authError} /> : nominationError ? <Message error msg={nominationError} /> :  (
                        
                        <form onSubmit={handleSubmit} >
                            <div className='w-full mb-4'>
                                <label htmlFor="reg_no" className="block mb-2 text-sm font-medium text-gray-900">Register No<span className='text-red-500 text-base'>*</span></label>
                                <input
                                    type='text'
                                    name='reg_no'
                                    id='reg_no'
                                    value={voteData.reg_no}
                                    disabled
                                    className="disbled shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                            <div className='w-full mb-4'>
                                <label htmlFor="vote" className="block mb-2 text-sm font-medium text-gray-900">Vote <span className='text-red-500 text-base'>*</span></label>
                                <select 
                                    id="vote" 
                                    name='vote' 
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                >
                                    <option value="">vote</option>	
                                    {nominations.map((val) => (
                                    <option value={val.party_name} key={val._id}>{val.party_name}</option>
                                    ))}      
                                </select>
                            </div>
                            <button type='submit' className='uppercase w-full duration-700 hover:bg-[#34508D] bg-black text-white text-sm text-center p-2.5 rounded shadow mt-8'>submit</button>
                        </form> 
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    userViewNominationList: state.userViewNominationList,
    vote: state.vote
})

export default connect(mapStateToProps, { userVote , getUserViewNominationList })(VoteFormScreen);
