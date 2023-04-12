import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuVisible = {
  visible: boolean;
};
const containerChange = (visible: MenuVisible['visible'], theme: DefaultTheme) => css`
  left: ${visible ? '0rem' : '-30rem'};
  overflow-y: ${visible ? 'auto' : 'hidden'};

  @media ${theme.media.lteMedium} {
    left: ${visible ? '0rem' : '-32rem'};
  }
`;
export const ContainerMenu = styled.div<MenuVisible>`
  ${({ theme, visible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${containerChange(visible, theme)}
  `}
`;
export const MenuContainer = styled.nav<MenuVisible>`
  ${() => css`
    margin: auto;
    width: 100%;
  `}
`;
export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xxlarge};
      img {
        border: 0.5rem solid ${theme.colors.secondary};
      }
    }
  `}
`;
export const List = styled.ul`
  ${() => css`
    list-style: none;
    padding: 0;
  `}
`;
export const Item = styled.li``;
export const Button = styled.button<MenuVisible>`
  ${({ theme, visible }) => css`
    z-index: 2;
    position: fixed;
    top: 2rem;
    width: 4rem;
    height: 4rem;
    transition: all 300ms ease-in-out;
    left: ${visible ? '26rem' : '1rem'};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    > svg:hover {
      color: ${theme.colors.secondary};
    }
    @media ${theme.media.lteMedium} {
      left: ${visible ? '26rem' : '-0.4rem'};
    }
  `}
`;
