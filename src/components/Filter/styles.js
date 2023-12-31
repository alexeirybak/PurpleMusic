import styled, { css } from 'styled-components';

export const CenterBlockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 51px;
  column-gap: 10px;
  @media screen and (max-width: 471px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 12px;
`;

export const FilterButton = styled.button`
  background-color: var(--container);
  transition: background-color 0.5s ease;
  color: var(--main-text);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  border: 1px solid var(--main-text);
  border-radius: 60px;
  padding: 6px 20px;
  width: 144px;
  cursor: pointer;
  &:hover {
    border-color: var(--btn-border-text-hover);
    color: var(--btn-border-text-hover);
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
  }
  @media screen and (max-width: 579px) {
    width: 120px;
  }
  @media screen and (max-width: 508px) {
    width: 109px;
  }
`;

export const BtnTextActive = styled(FilterButton)`
  border-color: #ad61ff;
  color: #ad61ff;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
`;

export const FilterCounter = styled.div`
  width: 30px;
  height: 30px;
  color: var(--container);
  background-color: #ad61ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -13px;
  right: -5px;
`;

export const FilterBlock = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  @media screen and (max-width: 475px) {
    padding-top: 22px;
    padding-bottom: 22px;
  }
`;

const FilterContentMixin = css`
  position: absolute;
  top: 38px;
  margin-top: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  transition: 0.5s ease max-height;
  background: var(--title-track-img);
  z-index: 1;
  width: 248px;
  @media screen and (max-width: 471px) {
    left: -50%;
  }
`;

export const FilterContent = styled.div`
  max-height: ${({ $isAuthorMenuOpen }) => ($isAuthorMenuOpen ? '305px' : '0')};
  ${FilterContentMixin};
  @media screen and (max-width: 471px) {
    left: -50%;
  }
`;

export const FilterContentYear = styled.div`
  max-height: ${({ $isYearMenuOpen }) => ($isYearMenuOpen ? '305px' : '0')};
  ${FilterContentMixin};
  @media screen and (max-width: 471px) {
    left: -50%;
    max-height: ${({ $isYearMenuOpen }) => ($isYearMenuOpen ? '120px' : '0')};
  }
`;

export const FilterContentGenre = styled.div`
  max-height: ${({ $isGenreMenuOpen }) => ($isGenreMenuOpen ? '305px' : '0')};
  ${FilterContentMixin};
  @media screen and (max-width: 471px) {
    left: -50%;
    max-height: ${({ $isGenreMenuOpen }) => ($isGenreMenuOpen ? '120px' : '0')};
  }
`;

const FilterListMixin = css`
  height: 150px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  overflow-x: hidden;
  scrollbar-color: var(--scroll-thumb) var(--scrollbar);
  a {
    transition: color 0.3s ease;
  }
  a:active,
  a:hover {
    color: #b672ff;
    text-decoration: underline;
    transition: color 0.3s ease;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--scrollbar);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-thumb);
    border-radius: 2px;
    border: 2px solid var(--scroll-thumb);
  }
  @media screen and (max-width: 498px) {
    height: 150px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 14px;
    overflow-x: hidden;
    scrollbar-color: var(--scroll-thumb) var(--scrollbar);
  }
`;

export const FilterListMenu = styled.ul`
  ${FilterListMixin};
  width: 180px;
`;

export const FilterListMenuItem = styled.li``;

export const FilterListMenuLink = styled.a`
  color: ${(props) => (props.$active ? '#b672ff' : 'var(--main-text)')};
  text-decoration: ${(props) => (props.$active ? 'underline' : 'none')};
`;
