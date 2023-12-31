import { PlayListTitleSvg } from '../../utils/iconSVG/playerListTitle';
import * as S from './styles';

export const ContentTitle = () => {
  return (
    <S.ContentTitle>
      <S.Col01>Трек</S.Col01>
      <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
      <S.Col03>АЛЬБОМ</S.Col03>
      <S.Col04>
        <PlayListTitleSvg />
      </S.Col04>
    </S.ContentTitle>
  );
};
