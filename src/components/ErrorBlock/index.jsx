import * as S from './styles';

export const ErrorBlock = ({ isError }) => {
  return (
    <S.ErrorBlock>
      <S.ErrorMessage>
        Не удалось загрузить плейлист, попробуйте позже: {isError}
      </S.ErrorMessage>
      <S.Img src='/img/404.gif' />
    </S.ErrorBlock>
  );
};
