import React from 'react';
import { InputLabel, MenuItem, FormControl, Select  } from '@mui/material';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const TableFilter = ({ rowHandler, rowLimit, data , setCurrentPage, currentPage }) => {
    
    const pageNumbers = [];  

    for (let i = 1; i<= Math.ceil(data.length / rowLimit); i++){
        pageNumbers.push(i)
    }
    
    return (
        <div className='flex items-center justify-between my-10 shadow p-4 md:flex-row flex-col bg-white'>
            <div className='md:w-20 w-full h-8 mb-1'>
                <FormControl sx={{width:100}} >
                    <InputLabel id='row-label'>Row</InputLabel>
                    <Select
                        labelId='row-label'
                        id='row'
                        value={rowLimit}
                        label='Row'
                        onChange={rowHandler}
                        sx={{height:35}}
                    >
                        <MenuItem value='5'>5</MenuItem>
                        <MenuItem value='10'>10</MenuItem>
                        <MenuItem value='15'>15</MenuItem>
                        <MenuItem value='20'>20</MenuItem>
                        <MenuItem value={data.length}>All</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='sen-font my-5 md:my-0'>page {currentPage} of <span className='text-gray-500'>{pageNumbers.length}</span></div>
            <div className='flex items-center justify-around md:w-40 w-full'>
                <button className={ pageNumbers.length >= currentPage ? currentPage === 1 ? 'text-red-400 text-lg' : 'text-green-500 text-lg' : 'text-red-500 text-lg'} onClick={pageNumbers.length >= currentPage ?  () => currentPage !== 1 ?  setCurrentPage(currentPage -1) : setCurrentPage(currentPage) :  () => setCurrentPage(currentPage) }><FiChevronLeft /> </button>
                <div className='text-lg'>{currentPage}</div>
                <button className={currentPage >= pageNumbers.length ? 'text-red-400 text-lg' : 'text-green-500 text-lg'} onClick={currentPage >= pageNumbers.length ? () => setCurrentPage(currentPage) : () => setCurrentPage(currentPage + 1)}><FiChevronRight /> </button>
            </div>
        </div>
    )
}

export default TableFilter;