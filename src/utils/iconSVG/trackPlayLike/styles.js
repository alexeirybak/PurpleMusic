import styled from 'styled-components';

export const TrackPlayLikeImg = styled.svg`
  height: 12px;
  stroke: var(--play-list-title);
  width: 14px;
  fill: transparent;
  path {
    fill: ${(props) => (props.$isLiked ? '#b672ff' : 'transparent')};
    stroke: var(--player-btn-repeat-shuffle);
    transition: fill 0.3s; // Добавляем плавный переход при изменении fill
  }
  &:hover path {
    fill: ${(props) => (props.$isLiked ? 'transparent' : '#b672ff')};
  }
  &:active path {
    fill: transparent;
  }
`;
