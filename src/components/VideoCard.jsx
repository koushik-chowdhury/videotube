import "../styles/videoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="thumbnail"
      />

      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.channelTitle}</p>
        <p className="meta">
          {video.views} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;