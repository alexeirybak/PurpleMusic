import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/actions/creators/creators';
import { IconSearchSvg } from '../../utils/iconSVG/iconSearch';
import { IconSearchHandleSvg } from '../../utils/iconSVG/iconSearchHandle';
import * as S from './styles';

export const Search = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <S.CenterBlockSearch>
      <S.Glass>
        <IconSearchSvg />
        <S.Handle>
          <IconSearchHandleSvg />
        </S.Handle>
      </S.Glass>
      <S.SearchText
        type='text'
        placeholder='Поиск'
        onChange={handleSearchChange}
      />
    </S.CenterBlockSearch>
  );
};
