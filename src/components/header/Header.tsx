//Header.tsx
//Parent: Banner.tsx

import Navbar from "../navbar/Navbar";
import './style-header.css';
type HeaderPropType={
  setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function Header({setIsMenuOpen}:HeaderPropType) {
  return (
    <header >
  <    Navbar setIsMenuOpen={setIsMenuOpen}/>
    </header>
  )
}

export default Header
