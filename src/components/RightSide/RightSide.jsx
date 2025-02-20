import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { FaComment, FaEye, FaShare } from 'react-icons/fa'

const RightSide = () => {
    return (
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
                <p className="text-gray-600 mt-2">Hi, I'm John Doe, a passionate writer and blogger. I love writing about technology, travel, and everything in between. Follow me for more engaging content!</p>
                <div className="flex justify-between items-center mt-4 text-gray-600 text-sm border-t pt-2">
                    <p className="flex items-center gap-1"> <AiFillLike /> 50</p>
                    <p className="flex items-center gap-1"> <FaComment /> 24</p>
                    <p className="flex items-center gap-1"><FaEye /> 100</p>
                    <p className="flex items-center gap-1"> <FaShare /> </p>
                </div>
            </div>
        
    )
}

export default RightSide