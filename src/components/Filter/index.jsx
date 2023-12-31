import { useGetAllTracksQuery } from '../../store/tracksApi';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions/creators/creators';
import { releaseDateFormatter } from '../../utils/releaseDateFormatter';
import * as S from './styles';

export const Filter = ({ setDataFilter, dataFilter, numberTracks }) => {
  const [openMenu, setOpenMenu] = useState('');
  const dispatch = useDispatch();
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [activeAuthors, setActiveAuthors] = useState(false);
  const [activeGenres, setActiveGenres] = useState(false);
  const {
    data: allTracks = { items: [] },
    isLoading,
    isError,
  } = useGetAllTracksQuery();

  useEffect(() => {
    if (!isLoading && !isError) {
    }
  }, [isLoading, isError, allTracks]);

  const handleAuthorClick = (author) => {
    setActiveGenres(false);
    setSelectedAuthors((prevSelected) => {
      if (prevSelected.includes(author)) {
        return prevSelected.filter((a) => a !== author);
      } else {
        return [...prevSelected, author];
      }
    });
  };

  const handleGenreClick = (genre) => {
    setActiveAuthors(false);
    setSelectedGenres((prevSelected) => {
      if (prevSelected.includes(genre)) {
        return prevSelected.filter((g) => g !== genre);
      } else {
        return [...prevSelected, genre];
      }
    });
  };

  useEffect(() => {
    dispatch(setFilter('authors', selectedAuthors));
  }, [selectedAuthors, dispatch]);

  useEffect(() => {
    dispatch(setFilter('genres', selectedGenres));
  }, [selectedGenres, dispatch]);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  let music = Array.isArray(allTracks) ? allTracks : [];
  const formattedAuthorList = [...new Set(music.map((item) => item.author))];
  const formattedYearList = releaseDateFormatter.map((item) => item);
  const genreList = [...new Set(music.map((item) => item.genre))];

  const toggleMenu = (menuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? '' : menuName));
  };

  return (
    <S.CenterBlockFilter onMouseLeave={() => setOpenMenu('')}>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterList>
        <S.FilterButton
          as={openMenu === 'author' && S.BtnTextActive}
          onClick={() => handleMenuClick('author')}
          disabled={isLoading}
        >
          исполнителю
        </S.FilterButton>
        {openMenu === 'author' && selectedAuthors.length > 0 && (
          <S.FilterCounter>{numberTracks}</S.FilterCounter>
        )}
        <S.FilterContent $isAuthorMenuOpen={openMenu === 'author'}>
          <S.FilterBlock>
            <S.FilterListMenu>
              {formattedAuthorList.map((item) => (
                <S.FilterListMenuItem key={item}>
                  <S.FilterListMenuLink
                    onClick={() => handleAuthorClick(item)}
                    $active={selectedAuthors.includes(item) || activeAuthors}
                  >
                    {item}
                  </S.FilterListMenuLink>
                </S.FilterListMenuItem>
              ))}
            </S.FilterListMenu>
          </S.FilterBlock>
        </S.FilterContent>
      </S.FilterList>
      <S.FilterList>
        <S.FilterButton
          as={openMenu === 'year' && S.BtnTextActive}
          onClick={() => toggleMenu('year')}
          disabled={isLoading}
        >
          году выпуска
        </S.FilterButton>

        <S.FilterContentYear $isYearMenuOpen={openMenu === 'year'}>
          <S.FilterBlock>
            <S.FilterListMenu>
              {formattedYearList.map((item) => (
                <S.FilterListMenuItem key={item}>
                  <S.FilterListMenuLink
                    onClick={() => setDataFilter(item)}
                    $active={dataFilter.includes(item)}
                  >
                    {item}
                  </S.FilterListMenuLink>
                </S.FilterListMenuItem>
              ))}
            </S.FilterListMenu>
          </S.FilterBlock>
        </S.FilterContentYear>
      </S.FilterList>
      <S.FilterList>
        <S.FilterButton
          as={openMenu === 'genre' && S.BtnTextActive}
          onClick={() => handleMenuClick('genre')}
          disabled={isLoading}
        >
          жанру
        </S.FilterButton>
        {openMenu === 'genre' && selectedGenres.length > 0 && (
          <S.FilterCounter>{numberTracks}</S.FilterCounter>
        )}
        <S.FilterContentGenre $isGenreMenuOpen={openMenu === 'genre'}>
          <S.FilterBlock>
            <S.FilterListMenu>
              {genreList.map((item) => (
                <S.FilterListMenuItem key={item}>
                  <S.FilterListMenuLink
                    onClick={() => handleGenreClick(item)}
                    $active={selectedGenres.includes(item) || activeGenres}
                  >
                    {item}
                  </S.FilterListMenuLink>
                </S.FilterListMenuItem>
              ))}
            </S.FilterListMenu>
          </S.FilterBlock>
        </S.FilterContentGenre>
      </S.FilterList>
    </S.CenterBlockFilter>
  );
};
