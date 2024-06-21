//Parent: Banner.tsx

// import './style-navigation.css';

type NavigationPropType={
  isVideoOpen:boolean;
  isMenuOpen:boolean;
}

function Navigation({ isMenuOpen, isVideoOpen }:NavigationPropType) {
  
  return (
    <>
      <div className={`banner__container__navigation ${isMenuOpen ? 'active' : ''}`}>
        <ul className={` banner__navigation ${isMenuOpen ? 'active' : '' } ${isVideoOpen ? 'videoOpen' : '' }`}>
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
