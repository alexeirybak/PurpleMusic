import styled, { css, keyframes } from 'styled-components';

export const PlayerTrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TrackPlayerContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TrackPlayerImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: var(--title-track-img);
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: 1;
  grid-column: 1;
  grid-area: image;
`;

export const TrackPlayerBlock = styled.div``;

const blink = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }`;

export const SkeletonIcon = styled.div`
  grid-area: image;
  width: 51px;
  height: 51px;
  margin-right: 12px;
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

const SceletonMixin = css`
  width: 59px;
  height: 15px;
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

export const SceletonAuthor = styled.div`
  ${SceletonMixin};
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const SceletonAlbum = styled(SceletonAuthor)`
  grid-area: album;
`;

export const TrackPlayAuthor = styled.div`
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: var(--main-text);
  white-space: nowrap;
  @media screen and (max-width: 471px) {
    line-height: 12px;
  }
`;

export const TrackPlayAlbum = styled.div`
  grid-row: 2;
  grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 24px;
  color: var(--main-text);
  white-space: nowrap;
`;

export const TrackPlayLikesDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30%;
`;

const BtnIconMixin = `css
cursor: pointer;
&:hover svg {
    fill: transparent;
    stroke: #acacac;
    }
&:active svg {
    fill: #696969;
    stroke: #fff;
    }
`;

export const TrackPlayLike = styled.div`
  padding: 5px;
  cursor: pointer;
  ${BtnIconMixin}
  @media screen and (max-width: 508px) {
    display: none;
  }
`;

export const TrackPlayDislike = styled(TrackPlayLike)`
  margin-left: 28.5px;
`;
