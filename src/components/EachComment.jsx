import React, { useState } from 'react'
import useGetRelativeTime from '../hooks/useGetRelativeTime'
import likeIcon from '../assets/like-icon.svg'
import dislikeIcon from '../assets/dislike-icon.svg'
import carotIcon from '../assets/carot-down.svg'
import useFormatLikeCount from '../hooks/useFormatLikeCount'

const EachComment = ({comment}) => {
    const {replies, snippet} = comment
    // const {authorDisplayName, authorProfileImageUrl, likeCount, publishedAt, textOriginal, updatedAt} = snippet
    const {authorDisplayName, authorProfileImageUrl, likeCount, publishedAt, textOriginal, updatedAt} = snippet.topLevelComment.snippet

    const publishTime = useGetRelativeTime(publishedAt);
    const likeCountNum = useFormatLikeCount(likeCount)
  return (
    <div className='flex gap-3 items-start mb-4'>
        <img src={authorProfileImageUrl} width={40} height={40} className='rounded-full' alt="" />
        <div className=''>
            <div><span className='text-[13px] font-semibold'>{authorDisplayName}</span> <span className='text-[12px] text-[#606060]'>{publishTime}</span> <span className='text-[12px] text-[#606060]'>{publishedAt !== updatedAt && '(edited)'}</span></div>
            <p className='text-[14px]'>{textOriginal}</p>
            <div className='flex gap-3 mt-1'>
                <button className='flex items-center gap-0.5 cursor-pointer'>
                    <div className='w-[32px] h-[32px] flex items-center justify-center hover:bg-[#00000019] rounded-full'>
                        <img src={likeIcon} alt="" className='' />
                    </div>
                    <span className='text-[12px]'>{likeCountNum}</span>
                </button>
                <button className='cursor-pointer'>
                    <div className='w-[32px] h-[32px] flex items-center justify-center hover:bg-[#00000019] rounded-full'>
                        <img src={dislikeIcon} alt="" />
                    </div>
                </button>
                <button className='text-[12px] font-medium py-2 px-4 hover:bg-[#00000019] rounded-full cursor-pointer'>Reply</button>
            </div>
            {replies?.comments && (
                <div>
                    <button className='cursor-pointer flex items-center py-2 px-4 rounded-full hover:bg-[#def1ff] gap-1.5'>
                        <img src={carotIcon} alt="" />
                        <span className='text-[14px] text-[#065fd4] font-medium'>{replies?.comments?.length} replies</span>
                    </button>

                    {/* {replies?.comments?.map(comment => <EachComment comment={comment} />)} */}
                </div>
            )}

        </div>
    </div>
  )
}

export default EachComment