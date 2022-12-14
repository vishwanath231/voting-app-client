import React, { useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import { Link } from 'react-router-dom';
import UserGif from '../../assets/gif/user.gif'
import NominationGif from '../../assets/gif/nomination.gif'
import AdminGif from '../../assets/gif/admin.gif'
import ReportGif from '../../assets/gif/report.gif';
import VoteGif from '../../assets/gif/vote.gif';
import MessageGif from '../../assets/gif/message.gif';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import { getUserList, getNominationList, getVoteList, getContactList, getAdminList } from '../../redux/actions/adminActions';
import Message from '../../components/Message';


const DashboardScreen = ({ getUserList, getNominationList, userList, nominationList, getVoteList, voteList, getContactList, contactList, adminList, getAdminList }) => {

    const {loading:userLoading, users, error } = userList;
    const {loading:nominationLoading, nominations } = nominationList;
    const {loading:voteLoading, votes } = voteList;
    const {loading:adminLoading, admins } = adminList;
    const {loading:contactLoading, contacts } = contactList;


    useEffect(() => {
        getUserList()
        getNominationList()   
        getVoteList()
        getAdminList()
        getContactList()
    }, [getUserList, getNominationList, getVoteList, getAdminList, getContactList])
    

    return (
        <div className='bg-gray-100 min-h-screen'>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4'>
                { error && <Message error msg={error} /> }
                <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <Link to='/admin/userList' className='flex bg-white items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='p-4 rounded mr-6' style={{ background: 'linear-gradient(90deg, hsla(18, 76%, 85%, 1) 0%, hsla(203, 69%, 84%, 1) 100%)'  }}>
                            <img src={UserGif} alt='user' className='w-14 h-14' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mont-font'>Users</p>
                            { userLoading ? <Loader /> :  <div className='mt-1 text-md font-medium'>+{ users?.length}</div>  }
                        </div>
                    </Link>
                    <Link to='/admin/nominationList' className='flex bg-white items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='p-4 rounded mr-6' style={{ background: 'linear-gradient(90deg, hsla(16, 100%, 76%, 1) 0%, hsla(49, 100%, 81%, 1) 100%)' }}>
                            <img src={NominationGif} alt='user' className='w-14 h-14' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mont-font'>Nomination</p>
                            { nominationLoading ? <Loader /> :  <div className='mt-1 text-md font-medium'>+{ nominations?.length}</div>  }
                        </div>
                    </Link>
                    <Link to='/admin/voteList' className='flex bg-white items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='p-4 rounded mr-6' style={{ background: 'linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)'  }}>
                            <img src={VoteGif} alt='vote' className='w-14 h-14' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mont-font'>Votes</p>
                            { voteLoading ? <Loader /> :  <div className='mt-1 text-md font-medium'>+{ votes?.length}</div>  }
                        </div>
                    </Link>
                    <Link to='/admin/analysis' className='flex bg-white items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='p-4 rounded mr-6' style={{ background: ' linear-gradient(90deg, hsla(40, 63%, 85%, 1) 0%, hsla(22, 94%, 79%, 1) 100%)'  }}>
                            <img src={ReportGif} alt='user' className='w-14 h-14' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mont-font'>Analysis</p>
                            <div className='mt-1 text-md font-medium'>+2</div>
                        </div>
                    </Link>
                    <Link to='/admin/all' className='flex bg-white items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='p-4 rounded mr-6' style={{ background: 'linear-gradient(90deg, hsla(11, 82%, 87%, 1) 0%, hsla(299, 85%, 90%, 1) 100%)'  }}>
                            <img src={AdminGif} alt='user' className='w-14 h-14' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mont-font'>Admins</p>
                            { adminLoading ? <Loader /> :  <div className='mt-1 text-md font-medium'>+{ admins?.length}</div>  }
                        </div>
                    </Link>
                    <Link to='/admin/contactList' className='flex bg-white items-center shadow p-4 rounded hover:shadow-xl'>
                        <div className='p-4 rounded mr-6' style={{ background: 'linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)'  }}>
                            <img src={MessageGif} alt='user' className='w-14 h-14' style={{ transform: 'rotate(180deg)' }} />
                        </div>
                        <div>
                            <p className='text-xl font-semibold mont-font'>Contacts</p>
                            { contactLoading ? <Loader /> : <div className='mt-1 text-md font-medium'>+{ contacts?.length}</div> }
                            
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userList: state.userList,
    nominationList: state.nominationList,
    voteList: state.voteList,
    adminList: state.adminList,
    contactList: state.contactList,

})

export default connect(mapStateToProps, { getUserList, getNominationList, getVoteList, getAdminList, getContactList })(DashboardScreen);
