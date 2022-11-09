import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import MobileNav from './components/MobileNav';
import Header from './components/Header';
import { BiPlus } from 'react-icons/bi';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserList } from '../../redux/actions/adminActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import UserList from './components/UserList';
import TableFilter from './components/TableFilter';
import { CSVLink } from 'react-csv';


const UserListScreen = ({ userList, getUserList }) => {
    
    useEffect(() => {
        getUserList();
    }, [getUserList])
    
    const { loading, users, error } = userList;

    const [filterData, setFilterData] = useState([]);

    const [rowLimit , setRowLimit] = useState(5)
    const [currentPage, setCurrentPage] = useState(1);

    const rowHandler = (e) => {
        const { value } = e.target;
        setRowLimit(value)
    }

    const indexOfLastData = currentPage * rowLimit;
    const indexOfFirstData = indexOfLastData - rowLimit;
    const userData = users?.slice(indexOfFirstData, indexOfLastData)
    const filterUserData = filterData.slice(indexOfFirstData, indexOfLastData)

    const searchHandler = (e) => {
        if (e.target.value !== '') {
            const filter = users.filter(item => {
                return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase()) 
            })
            setFilterData(filter)
        }else{
            setFilterData(users)
        }
    }


    const headers = [
        { label: "ID", key: "_id" },
        { label: "Reg No", key: "reg_no" },
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone_no" },
        { label: "Gender", key: "gender" },
        { label: "Birth Date", key: "birth_date" },
        { label: "Community", key: "community" },
        { label: "City", key: "address.city" },
        { label: "District", key: "address.district" },
        { label: "Pincode", key: "address.pincode" },
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
                    users
                </div>
                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <Link to='' className='py-2 w-full mb-4 md:mb-0 md:w-fit px-4 sen-font bg-[#83c5be] rounded shadow flex items-center'>
                        <BiPlus /> <span>Create User</span>
                    </Link>
                    <div className='w-full md:w-fit flex flex-col md:flex-row items-center'>
                        <div className='flex items-center shadow py-2 px-4 sen-font rounded bg-red-300 md:mr-10 mb-5 md:mb-0 w-full md:w-fit'>
                            <FiDownload />
                           {users &&  <CSVLink headers={headers} data={users} filename="user_list.csv" className='ml-3'>Export CSV</CSVLink>}
                        </div>
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
                                        <th className="px-6 py-3 border border-gray-300">NAME</th>
                                        <th className="px-6 py-3 border border-gray-300">EMAIL</th>
                                        <th className="px-6 py-3 border border-gray-300">PHONE</th>
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
                                                            <UserList val={val} />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    userData.map((val) => (
                                                        <React.Fragment key={val._id}>
                                                            <UserList val={val} />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <TableFilter rowHandler={rowHandler} rowLimit={rowLimit} data={users} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </>
                )}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    userList: state.userList
})

export default connect(mapStateToProps, { getUserList })(UserListScreen);
