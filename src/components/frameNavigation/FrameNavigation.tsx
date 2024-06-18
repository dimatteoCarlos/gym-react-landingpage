import React from 'react';
//Navigation.tsx
//Parent:ModalNavigation.tsx

// import './style-frameNavigation.css';

function FrameNavigation() {

  return (
    <>
      <div className="frame__container">
        <div className="frame__services">
          <h3 className="frame__services--title">health</h3>
          <div className="frame__services--par">Lorem adipisicing elit.</div>
        </div>
        <div className="frame__services">
          <h3 className="frame__services--title">fitness</h3>
          <div className="frame__services--par">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        </div>
        <div className="frame__services">
          <h3 className="frame__services--title">workout</h3>
          <div className="frame__services--par">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        </div>
      </div>
    </>
  );
}

export default FrameNavigation;
