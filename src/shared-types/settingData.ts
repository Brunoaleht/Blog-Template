import { MenuLinkProps } from '../components/MenuLink';
import { Logo } from './logo';
//import { Logo } from './logo';

export type SettingData = {
  identificador: string;
  attributes: {
    blogName: string;
    blogDescription: string;
    textFooter: string;
    logo: Logo;
    menuLink: MenuLinkProps[];
  };
};
