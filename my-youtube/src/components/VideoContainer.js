import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constant";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useDispatch } from "react-redux";
import {openMenu} from "../Utils/appSlice"

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(openMenu());
  })

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((vid) => (
       
            
            <Link key={vid.id}  to={"/watch?v=" + vid.id}> <VideoCard info={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
