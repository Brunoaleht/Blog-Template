import { useRouter } from 'next/router';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Footer } from '../../layout/Footer';
import { Setting } from '../../shared-types/setting';
import * as Styled from './styles';
import { BtnToggleTheme } from '../../components/BtnToggleTheme';

export type BaseProps = {
  setting: Setting;
  children: React.ReactNode;
};

export const Base = ({ setting, children }: BaseProps) => {
  const router = useRouter();
  return (
    <Styled.Wrapper>
      <BtnToggleTheme />
      <Menu menuLink={setting.settingData.attributes.menuLink} logo={setting.settingData.attributes.logo} />
      <Styled.HeaderContainer>
        <Header
          logo={setting.settingData.attributes.logo}
          blogDescription={setting.settingData.attributes.blogDescription}
          blogName={setting.settingData.attributes.blogName}
        />
      </Styled.HeaderContainer>
      <Styled.SearchContainer>
        <form action="/search/" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Encontre Posts"
            name="q"
            defaultValue={router?.query?.q || ''}
          />
        </form>
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.settingData.attributes.textFooter} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
