import React from 'react'

const CommentSectionShimmer = () => {
  return (
    <div className='flex gap-3 items-start mb-4'>
        <div className='bg-[#00000019] rounded-full w-[40px] h-[40px]'></div>
        <div className='w-full'>
            <div className='bg-[#00000019] rounded-2xl w-6/12 h-[20px] mb-3'></div>
            <div className='bg-[#00000019] rounded-2xl w-10/12 h-[20px] mb-2'></div>
            <div className='bg-[#00000019] rounded-2xl w-10/12 h-[20px] mb-3'></div>
            <div className='flex gap-2.5'>
                <div className='bg-[#00000019] rounded-2xl w-1/12 h-[20px]'></div>
                <div className='bg-[#00000019] rounded-2xl w-1/12 h-[20px]'></div>
            </div>
        </div>
    </div>
  )
}

export default CommentSectionShimmer