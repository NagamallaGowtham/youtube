import { useEffect } from "react"
import { YOUTUBE_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const dispatch = useDispatch()
    const allVideos = useSelector(store => store?.video?.videos)

    const fetchVideos = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=" + YOUTUBE_API_KEY);
        const json = await data.json();

        dispatch(addVideos(json.items));
    }

    useEffect(() => {
        fetchVideos();
    }, []);
  return (
    <div className="flex flex-wrap gap-6 my-8">
        {allVideos?.map(video => (
            <Link key={video.id} to={'/watch?v=' + video.id}>
                <VideoCard video={video} />
            </Link>
        ))}
    </div>
  )
}

export default VideoContainer