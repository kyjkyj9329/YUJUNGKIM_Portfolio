import { BsInstagram, BsGithub, BsEnvelope, BsFileEarmarkText } from 'react-icons/bs';
import emailImg from '../img/contact_icon-email.svg';
import InstaImg from '../img/contact_icon-instagram.svg';
import GithubImg from '../img/contact_icon-github.svg';

const ContactData = [
  {
    id: 1,
    name: 'kyjkyj9329@gmail.com',
    image: emailImg,
    icon: <BsEnvelope className='icon' />,
    url: "mailto:kyjkyj9329@gmail.com",
  },
  {
    id: 2,
    name: 'udon__e',
    image: InstaImg,
    icon: <BsInstagram className='icon' />,
    url: "https://www.instagram.com/udon__e",
  },
  {
    id: 3,
    name: 'github.com/kyjkyj9329',
    image: GithubImg,
    icon: <BsGithub className='icon' />,
    url: "https://github.com/kyjkyj9329",
  },
]

export default ContactData

// const url = {
//   instaURL: "https://www.instagram.com/udon__e",
//   githubURL: "https://github.com/kyjkyj9329",
//   emailURL: "mailto:kyjkyj9329@gmail.com",
// }

// export default url;