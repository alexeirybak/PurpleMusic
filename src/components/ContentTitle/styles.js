import styled, { css } from 'styled-components';

export const ContentTitle = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr;
  column-gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 4fr 2fr 2fr;
  }
  @media screen and (max-width: 360px) {
    column-gap: 0.5rem;
  }
  @media screen and (max-width: 360px) {
    grid-template-columns: 4fr 2fr;
  }
`;

const PlaylistTitleColMixin = css`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 24px;
  letter-spacing: 2px;
  color: var(--play-list-title);
  text-transform: uppercase;
`;

export const Col01 = styled.div`
  width: auto;
  ${PlaylistTitleColMixin};
`;

export const Col02 = styled.div`
  width: auto;
  ${PlaylistTitleColMixin};
  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const Col03 = styled.div`
  width: auto;
  ${PlaylistTitleColMixin};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Col04 = styled.div`
  width: auto;
  text-align: center;
  ${PlaylistTitleColMixin};
`;
