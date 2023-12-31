import { PlayerControls } from '../PlayerControl';
import { PlayerTrackPlay } from '../PlayerTrackPlay';
import * as S from './styles';

export const BarPlayer = ({ ...restParams }) => {
  return (
    <S.BarPlayer>
      <PlayerControls {...restParams} />
      <PlayerTrackPlay />
    </S.BarPlayer>
  );
};
