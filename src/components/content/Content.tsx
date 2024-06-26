//Parent:Banner.tsx

import React from 'react';
import FrameNavigation from '../frameNavigation/FrameNavigation';
import VideoClip from '../videoClip/VideoClip';

type ContentPropType = {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignUpOpen: React.Dispatch<boolean>;
  isSignUpOpen: boolean;
};

function Content({
  isVideoOpen,
  setIsVideoOpen,
  setIsSignUpOpen,
  isSignUpOpen,
}: ContentPropType) {
  const handleClickSignUp = () => {
    setIsVideoOpen((prev) => !prev);
    setIsSignUpOpen(true);
  };

  return (
    <>
      <div className='banner__layout__content-text'>
        <div
          className={`banner__content--text ${isVideoOpen ? 'videoOpen' : ''}`}
        >
          <h2 className='content--text--title'>Start Shinning</h2>
          <p className='content--text--par'>
            Ego amare uxorem meam et liberos meos. Laetus sum et plenam vitam
            habeo.Lorem ipsum Ipsa et societas est societas felicissima. Ego
            proposita consequi et excedere. ego sum abundans.
          </p>
          <a
            href='#'
            className='content--text--btn'
            onClick={handleClickSignUp}
          >
            {'Join Us'}
          </a>
        </div>
        {!isSignUpOpen && (
          <div className='banner__content--frame-video'>
            {!isSignUpOpen && <FrameNavigation />}
            {
              <VideoClip
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                setIsSignUpOpen={setIsSignUpOpen}
              />
            }
          </div>
        )}
      </div>
    </>
  );
}

export default Content;
