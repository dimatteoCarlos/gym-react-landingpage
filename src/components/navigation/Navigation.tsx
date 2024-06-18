import React from 'react';

//Parent: Banner.tsx

// import './style-navigation.css';

function Navigation({ isMenuOpen }) {
  
  return (
    <>
      <div className='banner__container__navigation'>
        <ul className={` banner__navigation ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href='#'>health</a>
          </li>
          <li>
            <a href='#'>fitness</a>
          </li>
          <li>
            <a href='#'>workout</a>
          </li>
          <li>
            <a href='#'>contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
