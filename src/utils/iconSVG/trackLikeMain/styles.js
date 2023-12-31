import styled from 'styled-components';

export const TrackLikesMainImg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: ${(props) => (props.$isLiked ? '#b672ff' : 'transparent')};
  path {
    stroke: var(--play-list-title);
  }
`;
