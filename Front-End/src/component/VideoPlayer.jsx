import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

const SimpleVideoPlayer = ({ src, videoId, userId, onProgressUpdate }) => {
  const videoRef = useRef(null);
  const [furthestWatched, setFurthestWatched] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const loadVideoProgress = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/progress/${userId}/${videoId}`);
        const savedProgress = response.data.progress;
        if (savedProgress !== undefined && savedProgress !== null) {
          setFurthestWatched(savedProgress);
          videoElement.currentTime = savedProgress;
          console.log(`Restored progress from backend: ${savedProgress}`);
        }
      } catch (err) {
        console.error('Error loading progress from backend:', err);
      }
    };

    const handleTimeUpdate = () => {
      if (videoElement.currentTime > furthestWatched) {
        setFurthestWatched(videoElement.currentTime);
        console.log(`Updated furthest watched: ${videoElement.currentTime}`);
      }
      onProgressUpdate((videoElement.currentTime / videoElement.duration) * 100);
    };

    const handlePause = async () => {
      try {
        await axios.post('http://localhost:5000/api/progress', {
          userId,
          videoId,
          progress: furthestWatched,
        });
        console.log(`Saved progress to backend: ${furthestWatched}`);
      } catch (err) {
        console.error('Error saving progress to backend:', err);
      }
    };

    const handleSeekAttempt = (e) => {
      if (videoElement.currentTime > furthestWatched) {
        videoElement.currentTime = furthestWatched;
        alert('You cannot fast-forward beyond the furthest point you have watched.');
        console.log(`Fast-forward attempt blocked. Reset to ${furthestWatched}`);
      }
    };

    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('seeking', handleSeekAttempt);

    loadVideoProgress();

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('seeking', handleSeekAttempt);
    };
  }, [videoId, userId, furthestWatched, onProgressUpdate]);

  return (
    <div>
      <video ref={videoRef} src={src} controls style={{ width: '100%' }} />
    </div>
  );
};

export default SimpleVideoPlayer;
