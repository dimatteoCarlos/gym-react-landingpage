
type VideoHeroPropType={
  isVideoOpen:boolean;
}
function VideoHero({ isVideoOpen }:VideoHeroPropType) {
  return (
    <>
      <video
        src='./images/fitness-1.mp4'
        muted
        loop
        autoPlay
        className={`bg__videoHero ${isVideoOpen ? 'active' : ''}`}
      />
    </>
  );
}

export default VideoHero;
