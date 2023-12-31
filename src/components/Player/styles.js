import styled from 'styled-components';

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--container);
  transition: background-color 0.5s ease;
  @media screen and (max-width: 471px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
  }
`;

export const Equalizer = styled.img`
  padding-top: 5px;
  padding-bottom: 10px;
  width: 100px;
  display: block;
  @media screen and (max-width: 897px) {
    display: none;
  }
`;

export const EqualizerPlace = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
  width: 100px;
  height: 58px;
`;

export const EqVolBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
