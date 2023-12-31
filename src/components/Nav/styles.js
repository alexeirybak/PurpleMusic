import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  background-color: var(--main-nav);
  transition: background-color 0.5s ease;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  background-color: transparent;
  margin-top: 17px;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

export const NavBurger = styled.div`
  @media screen and (max-width: 600px) {
    width: 20px;
    height: 36px;
    padding: 13px 0;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const BurgerLine = styled.span`
  display: inline-block;
  height: 1px;
  background-color: var(--burger-line);
  transition: background-color 0.5s ease;
`;

export const MenuContent = styled.div`
  background-color: var(--main-nav);
  transition: background-color 0.5s ease;
  @media screen and (max-width: 600px) {
    position: absolute;
    left: 30%;
    margin: 30px 0 0;
    padding: 0 15px 0 15px;
    border: ${({ $menuVisible }) =>
      $menuVisible
        ? '1px solid var(--main-text)'
        : '1px solid var(--main-nav)'};
    border-radius: 10px;
    max-height: 0;
    overflow: hidden;
    transition:
      background-color 0.5s ease,
      max-height 0.5s ease;
    z-index: 10;
    max-height: ${({ $menuVisible }) => ($menuVisible ? '220px' : '0')};
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  padding: 11px 0 0 0;
  @media screen and (max-width: 600px) {
    padding: 18px 0 0 0;
    flex-direction: column;
  }
`;

export const MenuItem = styled.li`
  display: inline-block;
  @media screen and (max-width: 768px) {
    padding: 5px 0;
    margin-bottom: 16px;
  }
`;

export const MenuLink = styled(NavLink)`
  color: var(--main-text);
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  display: inline-block;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #ad61ff;
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }

  &:hover::before,
  &:active::before,
  &.active::before {
    left: 0;
  }
`;

export const LogoImg = styled.img``;
export const PM = styled.h1``;
export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
