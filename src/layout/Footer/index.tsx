import * as Styled from './styles';
import { HtmlContent } from '../../components/TextComponent';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlContent html={footerHtml} />
    </Styled.Container>
  );
};
