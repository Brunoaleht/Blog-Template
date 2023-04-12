import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Logo } from '../../shared-types/logo';

export type MenuProps = {
  logo?: Logo;
  menuLink?: MenuLinkProps[];
};

export const Menu = ({ logo, menuLink = [] }: MenuProps) => {
  const [show, setShow] = useState(false);
  const handleChangeMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShow((v) => !v);
  };
  return (
    <>
      <Styled.Button aria-label="Open/Close" visible={show} onClick={handleChangeMenu}>
        {show ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </Styled.Button>
      <Styled.ContainerMenu visible={show} aria-hidden={!show}>
        <Styled.MenuContainer visible={show}>
          <Styled.Logo>
            <LogoLink link="/" text="Logo" logo={logo} />
          </Styled.Logo>
          <Styled.List>
            {menuLink.map((linkMenu) => (
              <Styled.Item key={linkMenu.id}>
                <MenuLink link={linkMenu.link} text={linkMenu.text} />
              </Styled.Item>
            ))}
          </Styled.List>
        </Styled.MenuContainer>
      </Styled.ContainerMenu>
    </>
  );
};
