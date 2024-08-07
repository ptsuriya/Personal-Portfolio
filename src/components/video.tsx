// app/VideoPlayer.tsx
'use client'
import { useEffect, useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = true;
      videoElement.play();
    }
  }, []);

  return (
    <video 
      ref={videoRef} 
      autoPlay 
      loop 
      muted 
      className="w-100 my-3" 
      src="/image/video.mp4"
    />
  );
};

export default VideoPlayer;
