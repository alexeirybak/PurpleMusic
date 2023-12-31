import { useSelector } from 'react-redux';
import * as S from './styles';

export const TrackTitleSvg = ({ isCurrentPlaying }) => {
  const isPlaying = useSelector((state) => state.tracks.isPlaying);

  return (
    <S.TrackTitleWrapper>
      {isCurrentPlaying ? (
        <S.PlayingDot $isPlaying={isPlaying} />
      ) : (
        <S.TrackTitleImg
          xmlns='http://www.w3.org/2000/svg'
          width='51'
          height='52'
          viewBox='0 0 51 52'
          fill='none'
        >
          <rect y='0.750977' width='51' height='51' fill='#F6F4F4' />
          <path d='M23 32.751V18.7207L34 17.751V29.751' stroke='#B1B1B1' />
          <ellipse cx='19.5' cy='32.751' rx='3.5' ry='2' stroke='#B1B1B1' />
          <ellipse cx='30.5' cy='29.751' rx='3.5' ry='2' stroke='#B1B1B1' />
        </S.TrackTitleImg>
      )}
    </S.TrackTitleWrapper>
  );
};
