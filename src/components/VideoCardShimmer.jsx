import React from 'react'

const VideoCardShimmer = () => {
  return (
    <div>
        <div className='max-w-full w-[380px] aspect-video bg-[#00000019] rounded-xl'></div>
        <div className="flex gap-2.5 items-start mt-2">
            <div className='w-[36px] h-[36px] shrink-0 rounded-[50%] bg-[#00000019] mt-0.5'></div>
            <div className="w-full mt-1">
                <div className='h-[20px] rounded-lg bg-[#00000019] mb-1.5'></div>
                <div className='h-[20px] rounded-lg bg-[#00000019] mb-1.5'></div>
                <div className='w-[50px] h-[20px] rounded-lg bg-[#00000019]'></div>
            </div>
        </div>
    </div>
  )
}

export default VideoCardShimmer