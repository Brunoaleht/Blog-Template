import { useRouter } from 'next/router';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Footer } from '../../layout/Footer';
import { Setting } from '../../shared-types/setting';
import * as Styled from './styles';
import { BtnToggleTheme } from '../../components/BtnToggleTheme';
import { useEffect, useRef, useState } from 'react';
import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export type BaseProps = {
  setting: Setting;
  children: React.ReactNode;
};

export const Base = ({ setting, children }: BaseProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeOut = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeOut.current);
    if (router?.query?.q === searchValue) return;
    const q = searchValue;
    if (!q || q.length < 3) return;

    inputTimeOut.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);
    return () => clearTimeout(inputTimeOut.current);
  }, [searchValue, router]);
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
        <Styled.SearchInput
          type="search"
          placeholder="Encontre Posts"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="Input disabled" />
        ) : (
          <CheckCircleOutline className="search-ok-icon" aria-label="Input enable" />
        )}
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.settingData.attributes.textFooter} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
