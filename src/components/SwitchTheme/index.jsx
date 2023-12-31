import { useState, useEffect } from 'react';
import { DarkSwitcherSvg } from '../../utils/iconSVG/darkSwitcher';
import { LightSwitcherSvg } from '../../utils/iconSVG/lightSwitcher';
import '../../styles/global.js';
import * as S from './styles.js';

export const SwitchTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const changeTheme = () => {
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setCurrentTheme('dark');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      setCurrentTheme('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setCurrentTheme('dark');
    }
  }, []);

  return (
    <S.SwitcherLabel>
      <S.Switcher
        type='checkbox'
        id='switcher'
        aria-label='Переключить на дневную / ночную тему'
        checked={currentTheme === 'dark'}
        onChange={changeTheme}
      />
      <S.SwitcherSwitcherLabel htmlFor='switcher'>
        <S.SwitcherBlock>
          {currentTheme === 'dark' ? <DarkSwitcherSvg /> : <LightSwitcherSvg />}
        </S.SwitcherBlock>
      </S.SwitcherSwitcherLabel>
    </S.SwitcherLabel>
  );
};
