import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 2;
  `}
`;
export const Label = styled.label`
  ${() => css`
    position: relative;
    display: inline-block;
    width: 5rem;
    height: 2.5rem;
    line-height: 0;
    overflow: hidden;
    font-size: 0;
    color: rgba(0, 0, 0, 0);
  `}
`;
export const BtnInput = styled.input`
  ${({ theme }) => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider} {
      background: ${theme.colors.secondary};
    }
    &:focus + ${Slider} {
      border: solid 1px ${theme.colors.secondary};
    }
    &:checked + ${Slider}::before {
      transform: translateX(1.95rem);
      background: ${theme.colors.primary};
    }
  `}
`;
export const Slider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    cursor: pointer;
    background: ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;
    border: solid 1px ${theme.colors.darkerGray};
    border-radius: 2rem;
    &::before {
      content: '';
      position: absolute;
      height: 2.1rem;
      width: 2.1rem;
      left: 0.4rem;
      bottom: 0.1rem;
      background: ${theme.colors.textDark};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`;
