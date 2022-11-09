import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import MobileNav from './components/MobileNav';
import Header from './components/Header';
import { FiDownload } from 'react-icons/fi';
import { connect } from 'react-redux';
import { getVoteList } from '../../redux/actions/adminActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import VoteList from './components/VoteList';
import TableFilter from './components/TableFilter';
import { CSVLink } from 'react-csv';


const VoteListScreen = ({ getVoteList, voteList }) => {
    
    useEffect(() => {
        getVoteList();
    }, [getVoteList])
    
    const {loading, votes, error} = voteList;
    
    const [filterData, setFilterData] = useState([]);

    const [rowLimit , setRowLimit] = useState(5)
    const [currentPage, setCurrentPage] = useState(1);

    const rowHandler = (e) => {
        const { value } = e.target;
        setRowLimit(value)
    }

    const indexOfLastData = currentPage * rowLimit;
    const indexOfFirstData = indexOfLastData - rowLimit;
    const userData = votes?.slice(indexOfFirstData, indexOfLastData)
    const filterUserData = filterData.slice(indexOfFirstData, indexOfLastData)

    const searchHandler = (e) => {
        if (e.target.value !== '') {
            const filter = votes.filter(item => {
                return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase()) 
            })
            setFilterData(filter)
        }else{
            setFilterData(votes)
        }
    }


    const headers = [
        { label: "ID", key: "_id" },
        { label: "User ID", key: "user" },
        { label: "Reg No", key: "reg_no" },
        { label: "Gender", key: "gender" },
        { label: "Community", key: "community" },
        { label: "Location", key: "location" },
        { label: "Vote", key: "vote" },
        { label: "CreatedAt", key: "createdAt" },
        { label: "UpdatedAt", key: "updatedAt" },
    ];

    return (
        <div className='bg-gray-100 min-h-screen'>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4'>
                <div className='my-6 text-3xl font-bold tracking-wide uppercase md:text-center'>
                    vote list
                </div>
                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <div className='flex items-center shadow py-2 px-4 sen-font rounded bg-red-300 mb-5 md:mb-0 w-full md:w-fit'>
                            <FiDownload />
                           {votes &&  <CSVLink headers={headers} data={votes} filename="vote_list.csv" className='ml-3'>Export CSV</CSVLink>}
                    </div>
                    <div className='w-full md:w-fit'>
                        
                        <input
                            name='search'
                            type='search'
                            onChange={searchHandler}
                            placeholder='search...'
                            className="shadow-sm bg-gray-50 md:w-60 border border-gray-300 text-gray-900 text-sm rounded-lg outline-[#edf2f4] focus:ring-[#83c5be] focus:border-[#83c5be] w-full p-2.5"
                        />
                    </div>
                </div>
                {loading ? <Loader /> : error ? <Message error msg={error} /> : (
                    <>

                        <div className="relative overflow-x-auto my-10">
                            <table className="w-full text-sm text-left text-black ">
                                <thead className="text-xs text-white mont-font text-white uppercase bg-[#0b2545]">
                                    <tr className='border border-gray-300'>
                                        <th className="px-6 py-3 border border-gray-300">ID</th>
                                        <th className="px-6 py-3 border border-gray-300">REG NO</th>
                                        <th className="px-6 py-3 border border-gray-300">VOTE</th>
                                        <th className="px-6 py-3 border border-gray-300">LOCATION</th>
                                        <th className="px-6 py-3 border border-gray-300">
                                            <span className="sr-only">ACTION</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterData.length  ? (
                                            <>
                                                {
                                                    filterUserData.map((val) => (
                                                        <React.Fragment key={val._id}>
                                                            <VoteList val={val} />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    userData.map((val) => (
                                                        <React.Fragment key={val._id}>
                                                            <VoteList val={val} />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <TableFilter rowHandler={rowHandler} rowLimit={rowLimit} data={votes} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </>
                )}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    voteList: state.voteList
})

export default connect(mapStateToProps, { getVoteList })(VoteListScreen);
