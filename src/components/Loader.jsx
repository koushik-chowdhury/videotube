import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loader-text">Loading videos...</p>
    </div>
  );
};

export default Loader;