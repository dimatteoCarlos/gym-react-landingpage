//SocialMedia.tsx
//Parent: NavBar.tsx, LastPage.tsx

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { FaXTwitter } from 'react-icons/fa6';

import './style-socialMedia.css';

type SocialObjType = {
  nameClass: string;
  icon: JSX.Element;
  iconId: IconType;
  iconName: string;
  iconUrl: string;
};

export const socialMediaInfo: SocialObjType[] = [
  {
    nameClass: 'whatsapp',
    icon: <FaWhatsapp />,
    iconId: FaWhatsapp,
    iconName: 'FaWhatsapp',
    iconUrl: 'https://wa.me/573204543746',
    // iconUrl: 'https://Whatsapp.com',
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
      'https://www.instagram.com/explore/locations/101373551821898/suescaventura/',
  },

  {
    nameClass: 'xtwitter',
    icon: <FaXTwitter />,
    iconId: FaXTwitter,
    iconName: 'FaxTwitter',
    iconUrl: 'https://twitter.com',
  },
];

type SocialMediaPropType = {
  isColored: boolean;
};
function SocialMedia({ isColored }: SocialMediaPropType): JSX.Element {
  return (
    <ul className='socialMedia'>
      {socialMediaInfo.map((item, indx) => {
        //it depends on the name of the icon, in this case all names start with Fa
        // const iconClass = `icon_${item.iconId.name
        //   .substring(2)
        //   .toLowerCase()} icon`;

        const iconClass = `icon_${item.nameClass} icon`;

        // console.log('🚀 ~ {socialMediaInfo.map ~ iconClass:', iconClass);
        // console.log(iconClass, item.iconId.name, item.iconId);

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
