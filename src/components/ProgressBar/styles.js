import styled from 'styled-components';

export const Timer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  background: transparent;
`;

export const TimerData = styled.p``;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 5px;
  background-color: #d9d9d9;
  position: relative;
  cursor: pointer;
  &:hover {
    height: 8px;
  }
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #b672ff;
  border-radius: 3px;
`;
