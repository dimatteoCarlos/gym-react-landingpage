// import './style-banner.css';
import { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Content from '../../components/content/Content';
import Watermark from '../../components/watermark/Watermark';
import VideoHero from '../../components/videoHero/VideoHero';
import SignUpForm from '../../components/signUpForm/SignUpForm';
import SocialMedia from '../../social-media/SocialMedia';

export type CredentialsType = {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
};
const initialCredentials = {
  username: undefined,
  email: undefined,
  password: undefined,
};

function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [credentials, setCredentials] = useState(initialCredentials);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  return (
    <div className='banner'>
      <VideoHero isVideoOpen={isVideoOpen} />
      <div className='banner__layout'>
        <Header setIsMenuOpen={setIsMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} isVideoOpen={isVideoOpen} />
        {!isVideoOpen && (
          <div className='socialMedia__container'>
            <SocialMedia isColored={false} />
          </div>
        )}

        <div className='banner__layout__content'>
          <Slider isVideoOpen={isVideoOpen} />
          <Content
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            setIsSignUpOpen={setIsSignUpOpen}
            isSignUpOpen={isSignUpOpen}
          />
          <Watermark text='fitness' className='left' />
          <Watermark text='life style' className='right' />
        </div>

        {isSignUpOpen && (
          <SignUpForm
            credentials={credentials} //needed when validation
            setCredentials={setCredentials}
            isSignUpOpen={isSignUpOpen}
            setIsSignUpOpen={setIsSignUpOpen}
            setIsVideoOpen={setIsVideoOpen}
          />
        )}
      </div>
    </div>
  );
}

export default Banner;
