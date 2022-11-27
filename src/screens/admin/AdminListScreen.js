import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import MobileNav from './components/MobileNav';
import Header from './components/Header';
import { FiDownload } from 'react-icons/fi';
import { connect } from 'react-redux';
import { getAdminList } from '../../redux/actions/adminActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import TableFilter from './components/TableFilter';
import { CSVLink } from 'react-csv';
import AdminList from './components/AdminList';


const AdminListScreen = ({ getAdminList, adminList }) => {
    

    useEffect(() => {
        getAdminList();
    }, [getAdminList])
    
    const {loading, admins, error} = adminList;
    
    const [filterData, setFilterData] = useState([]);

    const [rowLimit , setRowLimit] = useState(5)
    const [currentPage, setCurrentPage] = useState(1);

    const rowHandler = (e) => {
        const { value } = e.target;
        setRowLimit(value)
    }

    const indexOfLastData = currentPage * rowLimit;
    const indexOfFirstData = indexOfLastData - rowLimit;
    const userData = admins?.slice(indexOfFirstData, indexOfLastData)
    const filterUserData = filterData.slice(indexOfFirstData, indexOfLastData)

    const searchHandler = (e) => {
        if (e.target.value !== '') {
            const filter = admins.filter(item => {
                return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase()) 
            })
            setFilterData(filter)
        }else{
            setFilterData(admins)
        }
    }


    const headers = [
        { label: "ID", key: "_id" },
        { label: "Admin ID", key: "admin" },
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone No", key: "phone_no" },
        { label: "Gender", key: "gender" },
        { label: "DOB", key: "birth_date" },
        { label: "Community", key: "community" },
        { label: "City", key: "address.city" },
        { label: "Taluk", key: "address.taluk" },
        { label: "Post", key: "address.post" },
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
                    admin list
                </div>
                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <div className='flex items-center shadow py-2 px-4 sen-font rounded bg-red-300 mb-5 md:mb-0 w-full md:w-fit'>
                            <FiDownload />
                           {admins &&  <CSVLink headers={headers} data={admins} filename="admin_list.csv" className='ml-3'>Export CSV</CSVLink>}
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
                                        <th className="px-6 py-3 border border-gray-300">NAME</th>
                                        <th className="px-6 py-3 border border-gray-300">EMAIL</th>
                                        <th className="px-6 py-3 border border-gray-300">ROLE</th>
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
                                                            <AdminList val={val} />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    userData.map((val) => (
                                                        <React.Fragment key={val._id}>
                                                            <AdminList val={val} />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <TableFilter rowHandler={rowHandler} rowLimit={rowLimit} data={admins} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </>
                )}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    adminList: state.adminList,
})

export default connect(mapStateToProps, { getAdminList })(AdminListScreen);
