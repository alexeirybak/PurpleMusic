import styled, { css } from 'styled-components';

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

const PlayerButtonMixin = css`
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PlayerBtnPrev = styled.div`
  ${PlayerButtonMixin};
  margin-right: 23px;
`;

export const PlayerBtnPlay = styled.div`
  ${PlayerButtonMixin};
  width: 25px;
  margin-right: 23px;
`;

export const PlayerBtnNext = styled.div`
  ${PlayerButtonMixin};
  margin-right: 28px;
`;

export const PlayerBtnRepeat = styled.div`
  ${PlayerButtonMixin};
  margin-right: 24px;
`;

export const PlayerBtnShuffle = styled.div`
  ${PlayerButtonMixin};
`;
