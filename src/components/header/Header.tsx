//Header.tsx
//Parent: Banner.tsx

import Navbar from "../navbar/Navbar";
import './style-header.css';
function Header({setIsMenuOpen}) {
  return (
    <header >
  <    Navbar setIsMenuOpen={setIsMenuOpen}/>
    </header>
  )
}

export default Header
