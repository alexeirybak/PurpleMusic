import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #383838;
  transition: background-color 0.5s ease;
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: var(--container);
  transition: background-color 0.5s ease;
  box-shadow: inset 0px 0px 7px 3px #b672ff;
    padding: 8px;
}
`;

export const MainCenterBlock = styled.div`
  width: auto;
  padding: 20px 40px 20px 40px;
  transition: background-color 0.5s ease;
  @media screen and (max-width: 897px) {
    padding: 20px;
  }
  @media screen and (max-width: 360px) {
    padding: 5px;
  }
`;

export const CenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
  @media screen and (max-width: 471px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const CenterBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 897px) {
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 100%;
    background-image: linear-gradient(
        var(--container-bg) 0%,
        var(--container-bg) 100%
      ),
      url(${(props) =>
        props.$isPlaying ? '/img/abstract.gif' : '/img/abstract.jpeg'});
    background-attachment: fixed;
  }
  @media screen and (max-width: 471px) {
    background-size: cover;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const PlaylistTitleColMixin = css`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 24px;
  letter-spacing: 2px;
  color: var(--play-list-title);
  text-transform: uppercase;
  @media screen and (max-width: 471px) {
    line-height: 12px;
  }
`;

export const Col01 = styled.div`
  width: auto;
  ${PlaylistTitleColMixin};
`;

export const Col02 = styled.div`
  width: auto;
  ${PlaylistTitleColMixin};
`;

export const Col03 = styled.div`
  width: auto;
  ${PlaylistTitleColMixin};
`;

export const Col04 = styled.div`
  width: auto;
  text-align: end;
  ${PlaylistTitleColMixin};
`;

export const PlaylistItem = styled.div`
  display: block;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const PlaylistTrack = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr;
  column-gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 4fr 2fr 2fr;
  }
  @media screen and (max-width: 360px) {
    grid-template-columns: 4fr 2fr;
  }
`;

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TrackTitleComponent = styled.div`
  width: 51px;
  height: 51px;
  min-width: 51px;
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease;
  background-color: var(--track-title-svg-bg);
`;

export const TrackTitleImage = styled.svg`
  width: 51px;
  height: 51px;
  margin-right: 16px;
  background-color: var(--title-track-img);
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  rect {
    fill: var(--track-title-svg-bg);
    transition: fill 0.5s ease;
  }
  path {
    stroke: var(--track-title-svg);
    transition: stroke 0.5s ease;
  }
  ellipse {
    stroke: var(--track-title-svg);
    transition: ellipse 0.5s ease;
  }
`;

const blink = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }`;

export const SkeletonIcon = styled(TrackTitleImage)`
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

export const TrackTitleBlock = styled.div`
  margin-left: 17px;
  width: auto;
  height: 19px;
  @media screen and (max-width: 471px) {
    margin-left: 7px;
    display: flex;
    align-items: center;
  }
`;

export const SkeletonTrackTitle = styled(TrackTitleBlock)`
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
  width: 250px;
  height: 19px;
`;

export const SkeletonTrackAuthor = styled(TrackTitleBlock)`
  width: 250px;
  height: 19px;
  background-color: var(--title-track-img);
  animation: ${blink} 1s infinite alternate;
`;

export const TrackTitleNameAuthorLink = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  word-wrap: break-word;
  line-height: 24px;
  color: var(--main-text);
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    word-wrap: break-word;
    line-height: 24px;
    color: var(--track-title-span);
    margin-left: 6px;
  }
  @media screen and (max-width: 471px) {
    line-height: 12px;
  }
`;

export const TrackAuthor = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  word-wrap: break-word;
  line-height: 24px;
  color: var(--main-text);
  text-align: left;
  @media screen and (max-width: 471px) {
    line-height: 12px;
  }
  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const TrackAuthorLinkMobile = styled(TrackAuthorLink)`
  display: none;
  @media screen and (max-width: 360px) {
    display: block;
    color: var(--play-list-title);
  }
`;

export const TrackAlbum = styled.div`
  width: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  word-wrap: break-word;
  line-height: 24px;
  color: var(--play-list-title);
  @media screen and (max-width: 471px) {
    line-height: 12px;
  }
`;

export const TrackTimeComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  word-wrap: break-word;
  line-height: 24px;
  text-align: right;
  color: var(--play-list-title);
  @media screen and (max-width: 471px) {
    line-height: 12px;
  }
`;

export const ContentPlayList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LikeButton = styled.button`
  background-color: var(--container);
  border: none;
  cursor: pointer;
  padding-right: 10px;
  transition: background-color 0.5s ease;
  @media screen and (max-width: 897px) {
    background: none;
    cursor: pointer;
    padding-right: 10px;
    transition: background-color 0.5s ease;
    opacity: 100%;
  }
`;

export const Message = styled.h2`
  color: var(--btn-border-text-hover);
  margin-bottom: 30px;
`;
