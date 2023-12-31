import { useState, useEffect } from 'react';
import * as S from './styles';

export const VolumeBlock = ({ audioRef, volume, setVolume }) => {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume, audioRef]);

  const handleChangeVolume = (event) => {
    setVolume(event.target.value);
    setMuted(event.target.value === '0');
  };

  const toggleMute = () => {
    setMuted(!muted);
    setVolume(muted ? volume : 0);
  };

  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt='volume' onClick={toggleMute}>
            <use xlinkHref={'img/icon/sprite.svg#icon-volume'}></use>
          </S.VolumeSvg>
          {muted && <S.MutedText>&#10060;</S.MutedText>}
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type='range'
            min='0'
            max='1'
            step='0.01'
            value={volume}
            name='range'
            onChange={handleChangeVolume}
          />{' '}
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
};
