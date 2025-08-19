import { useEffect, useRef, useState } from "react"
import { YOUTUBE_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNextToken, addVideos } from "../utils/videoSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoContainer = () => {
    const observer = useRef();
    const [isFetching, setIsFetching] = useState(false);
    const nextPageToken = useSelector(store => store?.video?.nextToken)

    const dispatch = useDispatch()
    const allVideos = useSelector(store => store?.video?.videos)

    const fetchVideos = async () => {
        setIsFetching(true);
        // const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=" + YOUTUBE_API_KEY);
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&pageToken=${nextPageToken ? nextPageToken : ''}&regionCode=IN&key=${YOUTUBE_API_KEY}`)
        const json = await data.json();

        console.log(json);

        dispatch(addVideos(json.items));
        json.nextPageToken ? dispatch(addNextToken(json.nextPageToken)) : dispatch(addNextToken(''))
        setIsFetching(false);
    }

    useEffect(() => {
        !allVideos.length && fetchVideos();
    }, []);

    useEffect(() => {
        if (isFetching || nextPageToken === '') return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && nextPageToken) {
                fetchVideos();
            }
        });

        const videoSentinel = document.querySelector("#video-sentinel");
        if (videoSentinel) observer.current.observe(videoSentinel);

        return () => observer.current?.disconnect();
    }, [nextPageToken, isFetching]);
  return (
    <div className="flex flex-wrap gap-6 my-8">
        {allVideos?.map(video => (
            <Link key={video.id} to={'/watch?v=' + video.id}>
                <VideoCard video={video} />
            </Link>
        ))}
        {isFetching && (
            <>
                <VideoCardShimmer />
                <VideoCardShimmer />
                <VideoCardShimmer />
                <VideoCardShimmer />
                <VideoCardShimmer />
            </>
        )}
        <div id="video-sentinel"></div>
    </div>
  )
}

export default VideoContainer