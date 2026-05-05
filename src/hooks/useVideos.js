import { useEffect, useState } from 'react';
import { fetchVideos } from '../api/videoApi';

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchVideos();
        setVideos(data);
      } catch (err) {
        console.error('Hook error:', err);
        setError(err.message || 'Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { videos, loading, error };
};
