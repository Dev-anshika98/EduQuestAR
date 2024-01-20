import React, { useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import video1 from '../assets/video1-heart.mp4';
import video2 from '../assets/video4.mp4';
import video3 from '../assets/video5.mp4';

const VideoCarousel = () => {
  const carouselRef = useRef(null);

  const handleVideoEnded = () => {
    // Advance to the next slide when a video ends
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div>
      <h1 className='text-center mb-24 text-6xl font-extrabold text-[#10E1E6]'>How It Looks!</h1>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false} // Hiding thumbs for a cleaner look
        ref={carouselRef}
      >
        <div>
          <ReactPlayer
            url={video1}
            volume={1}
            muted
            width='100%'
            playing={true}
            onEnded={handleVideoEnded}
          />
        </div>
        <div>
          <ReactPlayer
            url={video2}
            volume={1}
            muted
            width='100%'
            playing={true}
            onEnded={handleVideoEnded}
          />
        </div>
        <div>
          <ReactPlayer
            url={video3}
            volume={1}
            muted
            width='100%'
            playing={true}
            onEnded={handleVideoEnded}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
