import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';
import { Logo } from '../../shared-types/logo';

export type LogoLinkProps = {
  text?: string;
  imgUrl?: string;
  link?: string;
  newTab?: boolean;
  logo?: Logo;
};

export const LogoLink = ({ text, link, newTab = false, logo = { logoData: { attributes: {} } } }: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';
  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref target={target}>
          <Styled.LinkCont>
            {logo.logoData.attributes.url ? <img src={logo.logoData.attributes.url} alt={text} /> : text}
          </Styled.LinkCont>
        </Link>
      </Heading>
    );
  }
  return (
    <Heading size="small" uppercase>
      <Styled.Container target={target} href={link}>
        {logo.logoData.attributes.url ? <img src={logo.logoData.attributes.url} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};
