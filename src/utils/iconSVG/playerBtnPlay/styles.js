import styled from 'styled-components';

export const PlayerBtnPlayImg = styled.svg`
  width: 22px;
  height: 20px;
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
