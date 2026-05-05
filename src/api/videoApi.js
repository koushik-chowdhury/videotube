import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.freeapi.app/api/v1/public',
});

export const fetchVideos = async () => {
  try {
    const res = await API.get('/youtube/videos');

    // API structure: res.data.data.data is an array where each item has "items" property
    const videosList = res.data.data?.data || [];

    // Flatten the structure - extract "items" from each video object
    const videos = videosList
      .map((v) => v.items)
      .filter((item) => item && item.id)
      .map((item) => ({
        id: item.id,
        title: item.snippet?.title || 'No Title',
        thumbnail: item.snippet?.thumbnails?.default?.url || '',
        channelTitle: item.snippet?.channelTitle || 'Unknown Channel',
        views: Math.floor(Math.random() * 1000000), // API doesn't provide views
      }));

    console.log('Extracted videos:', videos);

    return videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
