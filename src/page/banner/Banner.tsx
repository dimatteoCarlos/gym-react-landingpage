import React, { useState } from 'react';
// import './style-banner.css';
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Content from '../../components/content/Content';
import Watermark from '../../components/watermark/Watermark';
import VideoHero from '../../components/videoHero/VideoHero';


function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className='banner'>
      <VideoHero isVideoOpen={isVideoOpen} />
      <div className='banner__layout'>
        <Header setIsMenuOpen={setIsMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} />

        <div className='banner__layout__content'>
          <Slider isVideoOpen={isVideoOpen}/>
          <Content isVideoOpen={isVideoOpen}setIsVideoOpen={setIsVideoOpen}/>
          <Watermark text='fitness' className='left' />
          <Watermark text='life style' className='right' />
        </div>
      </div>
    </div>
  );
}

export default Banner;
