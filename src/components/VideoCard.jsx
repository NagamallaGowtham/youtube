import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addChannelThumbail } from '../utils/videoSlice'
import useFormatDuration from '../hooks/useFormatDuration'
import useFormatViewCount from '../hooks/useFormatViewCount'
import useGetRelativeTime from '../hooks/useGetRelativeTime'

const VideoCard = ({video}) => {
    const {contentDetails, snippet, statistics, id} = video
    const {duration} = contentDetails
    const {title, description, thumbnails, channelTitle, publishedAt, channelId} = snippet
    const {viewCount} = statistics

    // const [channelImg, setChannelImg] = useState("")

    const dispatch = useDispatch();
    const channelImg = useSelector(store => store.video.channelThumbnail[id]);

    const durationTime = useFormatDuration(duration);
    const viewCountNum = useFormatViewCount(viewCount);
    const publishTime = useGetRelativeTime(publishedAt);

    const fetchChannel = async () => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+channelId+"&key=" + YOUTUBE_API_KEY);
        const json = await data.json();

        // setChannelImg(json?.items[0]?.snippet?.thumbnails?.default?.url)
        dispatch(addChannelThumbail({[id]: json?.items[0]?.snippet?.thumbnails?.default?.url}))
    }
    
    useEffect(() => {
        video && fetchChannel();
    }, []);
  return (
    <div className='video-card max-w-full w-[380px]'>
        <div className='relative'>
            <img src={thumbnails?.medium?.url} className='rounded-xl w-full' alt="" />
            <p className='absolute text-white text-[12px] font-medium p-1 rounded-lg bg-black bottom-2.5 right-2.5'>{durationTime}</p>
        </div>
        <div className="video-details flex gap-2.5 items-start mt-2">
            <img src={channelImg} className='rounded-full' width={36} height={36} alt="" />
            <div className="details">
                <h2 className='font-semibold text-[16px]'>{title}</h2>
                <p className='text-[#606060] mt-1 text-[14px]'>{channelTitle}</p>
                <p className='text-[#606060] text-[14px]'>{viewCountNum} <span className='font-bold align-text-bottom'>.</span> {publishTime}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard