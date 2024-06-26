import { LayoutGridIcon, Search } from 'lucide-react';
import './style-navbar.css';

type NavbarPropType = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Navbar({ setIsMenuOpen }: NavbarPropType) {
  const handleClickNavMenu = () => {
    console.log('clicked on nav menu');
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className='header__navbar'>
        <div className='logo__container'>
          <a href='#' className='menu' rel='noreferrer'>
            <LayoutGridIcon
              onClick={handleClickNavMenu}
              className='LayoutGridIcon icon'
            />
          </a>
          <a href='/' className='logo'>
            logo
          </a>
        </div>

        <div className='search__container'>
          <input type='text' placeholder='Search' />
          <Search className='SearchIcon icon' />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
