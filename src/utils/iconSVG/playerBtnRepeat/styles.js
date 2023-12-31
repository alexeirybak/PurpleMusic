import styled from 'styled-components';

export const PlayerBtnRepeatImg = styled.svg`
  width: 18px;
  height: 12px;
  path {
    fill: ${(props) =>
      props.$isLoop
        ? 'var(--player-btn-repeat-shuffle-active)'
        : 'var(--player-btn-repeat-shuffle)'};
  }
  &:hover path {
    fill: var(--player-btn-repeat-shuffle-hover);
  }
  &:active path {
    fill: var(--main-text);
  }
`;
