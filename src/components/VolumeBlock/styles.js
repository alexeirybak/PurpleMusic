import styled from 'styled-components';

export const BarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
  @media screen and (max-width: 768px) {
    padding: 0 30px 0 0;
  }
`;

export const VolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
  position: relative;
  cursor: pointer;
`;

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const VolumeProgress = styled.div`
  width: 109px;
  cursor: pointer;
`;

export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
`;

export const MutedText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 1.125rem;
`;
