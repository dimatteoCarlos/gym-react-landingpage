//SocialMedia.tsx
//Parent: NavBar.tsx, LastPage.tsx

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IconType } from 'react-icons';

// import { FaWhatsapp } from 'react-icons/fa';

// import { FaXTwitter } from 'react-icons/fa6';

import './style-socialMedia.css';

type SocialObjType = {
  nameClass: string;
  icon: JSX.Element;
  iconId: IconType;
  iconName: string;
  iconUrl: string;
};

export const socialMediaInfo: SocialObjType[] = [
  // {
  //   nameClass: 'whatsapp',
  //   icon: <FaWhatsapp />,
  //   iconId: FaWhatsapp,
  //   iconName: 'FaWhatsapp',
  //   iconUrl: 'https://wa.me/573204543746',
  //   // iconUrl: 'https://Whatsapp.com',
  // },
  {
    nameClass: 'youtube',
    icon: <FaYoutube />,
    iconId: FaYoutube,
    iconName: 'FaYoutube',
    iconUrl: 'https://youtube.com',
  },
  {
    nameClass: 'facebook',
    icon: <FaFacebook />,
    iconId: FaFacebook,
    iconName: 'FaFacebook',
    iconUrl: 'https://www.facebook.com/p/SuescAventura-100063543973730/',
  },
  {
    nameClass: 'instagram',
    icon: <FaInstagram />,
    iconId: FaInstagram,
    iconName: 'FaInstagram',
    // iconUrl:
    //   'https://www.instagram.com/suescaventura/?igsh=MTVvemFneXRsdGJmNw%3D%3D',
    iconUrl:
      'https://www.instagram.com',
  },
  // {
  //   nameClass: 'xtwitter',
  //   icon: <FaXTwitter />,
  //   iconId: FaXTwitter,
  //   iconName: 'FaxTwitter',
  //   iconUrl: 'https://twitter.com',
  // },
];

type SocialMediaPropType = {
  isColored: boolean;
};
function SocialMedia({ isColored }: SocialMediaPropType): JSX.Element {
  return (
    <ul className='socialMedia'>
      {socialMediaInfo.map((item, indx) => {
        const iconClass = `icon_${item.nameClass} icon`;

        return (
          <li key={`${item.iconId.name}--${indx}`}>
            <a
              href={item.iconUrl}
              className={`${iconClass} ${isColored ? 'colored' : ''}`}
              rel='noreferrer'
              target='_blank'
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialMedia;
