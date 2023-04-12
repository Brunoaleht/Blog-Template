import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';

export const BtnToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    if (newTheme.name === 'inverted') {
      setChecked(true);
    }
  }, []);
  useEffect(() => {
    setTheme(checked ? 'inverted' : 'default');
  }, [checked, setTheme]);
  const handleChange = () => {
    setChecked((s) => !s);
    setTheme(checked ? 'inverted' : 'default');
  };
  return (
    <Styled.Wrapper>
      <Styled.Label>
        Toggle light and dark mode
        <Styled.BtnInput type="checkbox" value="Dark mode active" onChange={handleChange} checked={checked} />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Wrapper>
  );
};
