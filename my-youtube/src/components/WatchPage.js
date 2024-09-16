import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentsContainer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex flex-col">
    <div className="px-5">
      <iframe
        width="1200"
        height="600"
        src={"https:/www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <CommentContainer/>
    </div>
  );
};

export default WatchPage;
