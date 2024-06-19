//Parent:

import React from 'react';

import FrameNavigation from '../frameNavigation/FrameNavigation';
import VideoClip from '../videoClip/VideoClip';

function Content({
  isVideoOpen,
  setIsVideoOpen,
  
}) {
  const handleClickSignUp = () => {
    setIsVideoOpen((prev) => !prev);
  };

  return (
    <>
      <div className='banner__layout__content-text'>
        <div
          className={`banner__content--text ${isVideoOpen ? 'videoOpen' : ''}`}
        >
          <h2 className='content--text--title'>Start Shinning</h2>
          <p className='content--text--par'>
            Lorem ipsum Ipsa societas est societas felicissima. Odit animi
            repudiandae soluta laboriosam natus, iure quam? Amet maxime sint
            impedit modi magni.
          </p>
          <a
            href='#'
            className='content--text--btn'
            onClick={handleClickSignUp}
          >
            {'Join Us'}
          </a>
        </div>

        <div className='banner__content--frame-video'>
          <FrameNavigation />
          <VideoClip
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            //porque ts pidio ...isSignUpOpen
          />
        </div>
      </div>
    </>
  );
}

export default Content;
