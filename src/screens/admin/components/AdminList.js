import React from 'react';
import { BiIdCard } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const AdminList = ({ val }) => {

    return (
        <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font">
            <td className="px-4 py-4 border border-gray-300">{val._id}</td>
            <td className="px-4 py-4 border border-gray-300 uppercase">{val.name}</td>
            <td className="px-4 py-4 border border-gray-300">{val.email}</td>
            <td className="px-4 py-4 border border-gray-300">Admin</td>
            <td className='flex justify-around items-center px-4 py-4 '>
                <Link to={`/admin/all/${val._id}`} className='bg-white shadow-md flex items-center p-2 rounded'>
                    <BiIdCard className='text-green-600 text-base mr-1' />
                    Details
                </Link>
            </td>
        </tr>
    )
}


export default AdminList;
