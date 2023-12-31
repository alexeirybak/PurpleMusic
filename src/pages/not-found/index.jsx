import { NavLink } from 'react-router-dom';
import * as S from './styles';

export const NotFound = () => {
  return (
    <S.Block404>
      <S.Img src='/img/404.gif' />
      <S.Sign>
        Пестни чё-та нету! <br></br>Ашипка 404 ((
      </S.Sign>
      <NavLink to='/'>
        <S.GoToMain>На главную</S.GoToMain>
      </NavLink>
    </S.Block404>
  );
};
