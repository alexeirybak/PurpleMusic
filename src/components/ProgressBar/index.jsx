import { useState, useEffect, useRef } from 'react';
import { durationFormatter } from '../../utils/durationFormatter';
import * as S from './styles';

export const ProgressBar = ({ currentTime, duration, onSeek }) => {
  const [progressPercentage, setProgressPercentage] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (duration > 0) {
      setProgressPercentage((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  const handleClick = (e) => {
    const progressBarWidth = progressBarRef.current.clientWidth;
    const clickPosition =
      e.clientX - progressBarRef.current.getBoundingClientRect().left;
    const newTime = (clickPosition / progressBarWidth) * duration;

    if (onSeek) {
      onSeek(newTime);
    }
  };

  return (
    <>
      <S.Timer>
        <S.TimerData>{durationFormatter(currentTime)}</S.TimerData>
        <S.TimerData> / </S.TimerData>
        <S.TimerData>{durationFormatter(duration)}</S.TimerData>
      </S.Timer>
      <S.ProgressBarWrapper onClick={handleClick} ref={progressBarRef}>
        <S.ProgressBar style={{ width: `${progressPercentage}%` }} />
      </S.ProgressBarWrapper>
    </>
  );
};
