import { CirclePlayIcon, CircleXIcon, CirclePause } from 'lucide-react';
import React, { useState } from 'react';

function VideoClip({ isVideoOpen, setIsVideoOpen, setIsSignUpOpen }) {
  
  function handlePlayVideo() {
    setIsVideoOpen((prev) => !prev);
    setIsSignUpOpen(false);
  }

  return (
    <>
      <div className='videoclip__container'>
        <video
          src='./images/fitness-1.mp4'
          muted
          loop
          autoPlay
          className={`videoclip`}
        />

        <a
          href='#'
          className={`videoclip__playBtn ${isVideoOpen ? 'videoOpen' : ''}`}
          onClick={handlePlayVideo}
        >
          <CirclePlayIcon className='play_icon open' />
          {/* <CirclePause className='play_icon close' /> */}
          <CircleXIcon className='play_icon close' />
        </a>
      </div>
    </>
  );
}

export default VideoClip;
