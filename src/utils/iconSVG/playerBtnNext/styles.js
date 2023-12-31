import styled from 'styled-components';

export const PlayerBtnNextImg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  path {
    fill: var(--player-btn-prev-next);
  }
  &:hover path {
    fill: var(--player-btn-hover);
  }
  &:active path {
    fill: var(--player-btn-prev-next);
  }
`;
