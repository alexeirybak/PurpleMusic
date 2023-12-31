import styled from 'styled-components';

export const PlayerBtnPauseImg = styled.svg`
  width: 15px;
  height: 19px;
  rect {
    fill: var(--player-btn-prev-next);
  }
  &:hover rect {
    fill: var(--player-btn-hover);
  }
  &:active rect {
    fill: var(--player-btn-prev-next);
  }
`;
