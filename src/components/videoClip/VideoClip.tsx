import { CirclePlayIcon, CircleXIcon, CirclePause } from 'lucide-react';

type VideoClipPropType = {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignUpOpen: React.Dispatch<boolean>;
  // setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function VideoClip({
  isVideoOpen,
  setIsVideoOpen,
  setIsSignUpOpen,
}: VideoClipPropType) {
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
          <CircleXIcon className='play_icon close' />
          {/* <CirclePause className='play_icon close' /> */}
        </a>
      </div>
    </>
  );
}

export default VideoClip;
