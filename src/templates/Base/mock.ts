import { BaseProps } from '.';

export default {
  setting: {
    settingData: {
      identificador: '1',
      attributes: {
        blogName: 'Bruno Alexandre',
        blogDescription: 'Blog de ideias e de projetos realizados',
        textFooter: 'feito com amor',
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
            link: '#about',
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
      },
    },
  },
  children: 'Olá Mundo',
} as BaseProps;
