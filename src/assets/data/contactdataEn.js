import { BsInstagram, BsGithub, BsEnvelope, BsFileEarmarkText } from 'react-icons/bs';
import emailImg from '../img/contact_icon-email.svg';
import InstaImg from '../img/pngwing(2).com.png';
import GithubImg from '../img/pngwing.com3.png';

const ContactDataEn = [
  {
    id: 1,
    name: 'kyjkyj9329@gmail.com',
    image: emailImg,
    icon: <BsEnvelope />,
    url: "mailto:kyjkyj9329@gmail.com",
  },
  {
    id: 2,
    name: 'udon__e',
    image: InstaImg,
    icon: <BsInstagram />,
    url: "https://www.instagram.com/udon__e",
  },
  {
    id: 3,
    name: 'github.com/kyjkyj9329',
    image: GithubImg,
    icon: <BsGithub />,
    url: "https://github.com/kyjkyj9329",
  },
]

export default ContactDataEn