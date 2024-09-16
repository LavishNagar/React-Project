
const VideoCard=({info})=>{
    // console.log(info);
    const { snippet,statistics}=info;
    const {channelTitle, title, thumbnails}=snippet;
    return(
        <div className="p-2 m-2 w-72 shadow-lg">
            <img alt="thumbnail" className="rounded-lg" src={thumbnails.high.url} />

            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}
export default VideoCard;