import React from 'react'

const Message = ({ error, msg, success }) => {
    return (
        <div className='sen-font'>
            {
                error ? (
                    <div className="p-3 my-4 text-md text-center my-2 text-red-700 bg-red-100 rounded" role="alert">
                        <span className="font-medium ">{msg}</span> 
                    </div>
                ) : null
            }
            {
                success ? (
                    <div className="p-3 my-4 text-md text-green-700 bg-green-200 rounded" role="alert">
                        <span className="font-medium">{msg}</span> 
                    </div>
                ) : null
            }
        </div>
    )
}

export default Message