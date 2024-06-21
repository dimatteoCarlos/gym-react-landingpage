//Navigation.tsx
//Parent:ModalNavigation.tsx

// import './style-frameNavigation.css';

function FrameNavigation() {
  return (
    <>
      <div className='frame__container'>
        <div className='frame__services'>
          <h3 className='frame__services--title'>health</h3>
          <div className='frame__services--par'>sanus sum</div>
        </div>
        <div className='frame__services'>
          <h3 className='frame__services--title'>fitness</h3>
          <div className='frame__services--par'>Sum figura bona</div>
        </div>
        <div className='frame__services'>
          <h3 className='frame__services--title'>workout</h3>
          <div className='frame__services--par'>Corpus meum exerceo</div>
        </div>
      </div>
    </>
  );
}

export default FrameNavigation;
