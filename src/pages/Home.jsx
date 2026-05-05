import { useVideos } from "../hooks/useVideos";
import VideoGrid from "../components/VideoGrid";
import Loader from "../components/Loader";
import "../styles/home.css";

const Home = () => {
  const { videos, loading, error } = useVideos();

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="container">
        <div className="error-container">
          <span className="error-icon">⚠️</span>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="retry-btn"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>🎬 Latest Videos</h2>
      {videos.length === 0 ? (
        <div className="empty-state">
          <p>No videos available</p>
        </div>
      ) : (
        <VideoGrid videos={videos} />
      )}
    </div>
  );
};

export default Home;