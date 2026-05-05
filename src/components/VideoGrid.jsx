import VideoCard from "./VideoCard";
import "../styles/grid.css";

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
};

export default VideoGrid;