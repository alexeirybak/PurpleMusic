import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { ProgressBar } from '../ProgressBar';
import { BarPlayer } from '../BarPlayer';
import { VolumeBlock } from '../VolumeBlock';
import * as S from './styles';

export const Player = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const isPlaying = useSelector((state) => state.tracks.isPlaying);

  const handleSeek = (newTime) => {
    setCurrentTime(newTime);
    if (audioRef && audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <S.Bar>
      <S.BarContent>
        <ProgressBar
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          duration={duration}
          setDuration={setDuration}
          onSeek={handleSeek}
        />
        <S.BarPlayerBlock>
          <BarPlayer
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
            audioRef={audioRef}
            volume={volume}
          />
          <S.EqVolBlock>
            {isPlaying ? (
              <S.Equalizer src='/img/equalizer.gif' alt='Эквалайзер' />
            ) : (
              <S.Equalizer src='/img/non-equalizer.png' alt='Эквалайзер' />
            )}
            <VolumeBlock
              audioRef={audioRef}
              volume={volume}
              setVolume={setVolume}
            />
          </S.EqVolBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
