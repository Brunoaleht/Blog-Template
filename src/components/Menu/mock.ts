import { MenuProps } from '.';

export default {
  logo: {
    logoData: {
      attributes: {
        alternativeText: null,
        url: 'https://res.cloudinary.com/dxldesniw/image/upload/v1677869914/logo1_6dca30fa4b.png',
      },
    },
  },
  menuLink: [
    {
      id: '1',
      link: '/about',
      text: 'About',
      newTab: false,
    },
    {
      id: '3',
      link: '#skills',
      text: 'Skills',
      newTab: false,
    },
    {
      id: '2',
      link: '#contact',
      text: 'Contact',
      newTab: true,
    },
  ],
} as MenuProps;
