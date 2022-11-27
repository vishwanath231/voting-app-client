import React from 'react';
import { BiIdCard } from 'react-icons/bi';
import { HiOutlineTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../../../redux/actions/adminActions';


const ContactList = ({ val, deleteContact }) => {

    const deleteHandler = () => {
        deleteContact(val._id)
    }

    return (
        <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font">
            <td className="px-4 py-4 border border-gray-300">{val._id}</td>
            <td className="px-4 py-4 border border-gray-300 uppercase">{val.username}</td>
            <td className="px-4 py-4 border border-gray-300">{val.email}</td>
             <td className="px-4 py-4 border border-gray-300 uppercase">{val.createdAt}</td>
            <td className='flex justify-around items-center px-4 py-4 '>
                <button type='button' onClick={deleteHandler} className='bg-red-400 p-1 rounded text-lg text-white'>
                    <HiOutlineTrash />
                </button>
                <Link to={`/admin/contact/${val._id}`} className='bg-white shadow-md flex items-center p-2 rounded'>
                    <BiIdCard className='text-green-600 text-base mr-1' />
                    Details
                </Link>
            </td>
        </tr>
    )
}


export default connect(null, { deleteContact })(ContactList);
