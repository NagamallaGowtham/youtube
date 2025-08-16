import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFormatViewCount from '../hooks/useFormatViewCount'
import useGetRelativeTime from '../hooks/useGetRelativeTime'
import { YOUTUBE_API_KEY } from '../utils/constants'
import { addVideoComments } from '../utils/commentsSlice'
import CommentSection from './CommentSection'

const WatchVideo = ({video, videoId}) => {
    const {contentDetails, snippet, statistics, id} = video
    const {duration} = contentDetails
    const {title, description, channelTitle, publishedAt, channelId} = snippet
    const {viewCount, commentCount} = statistics

    const chnlImg = useSelector(store => store?.video?.channelThumbnail)

    const dispatch = useDispatch();

    const viewCountNum = useFormatViewCount(viewCount)
    const publisTime = useGetRelativeTime(publishedAt)

    const fetchCommentThreads = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=Ks-_Mh1QhMc&key=" + YOUTUBE_API_KEY);
        const json = await data.json()

        console.log(json)
        dispatch(addVideoComments(json.items));
    }

    useEffect(() => {
        fetchCommentThreads();
    }, [])
  return (
    <>
        <div className='w-[60vw] max-w-full'>
            <iframe className='aspect-video rounded-2xl'
                src={"https://www.youtube.com/embed/"+videoId.get("v")+"?autoplay=1"} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
            ></iframe>
            <div className='my-3'>
                <h2 className='text-[20px] font-bold'>{title}</h2>
                <div className='flex gap-18 items-center flex-wrap mt-3'>
                    <div className='flex gap-2.5 items-center'>
                        <img src={chnlImg[id]} width={40} height={40} className='rounded-full' alt='' />
                        <h3 className='text-[16px] font-semibold'>{channelTitle}</h3>
                    </div>
                    <div className='flex gap-2'>
                        <button className='py-1.5 px-5 bg-[#0000000d] font-medium rounded-full cursor-pointer hover:bg-[#0000000a]'>Join</button>
                        <button className='py-1.5 px-5 bg-[#0f0f0f] font-medium text-white rounded-full cursor-pointer'>Subscribe</button>
                    </div>
                </div>
                <div className="description mt-6">
                    <div className='rounded-lg bg-[#0000000c] p-3'>
                        <h2 className='text-[14px] font-medium'>{viewCountNum + " " + publisTime}</h2>
                        <p className='text-[14px] mt-2 text-[#0f0f0f]'>{description}</p>
                    </div>
                </div>
                <h2 className='font-bold text-[20px] mt-3'>{commentCount} Comments</h2>
                <CommentSection />
            </div>
        </div>
    </>
  )
}

export default WatchVideo