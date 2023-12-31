import { useGetAllTracksQuery } from '../../store/tracksApi';
import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../contexts/UserContext';
import {
  activeTrack,
  setAllTracks,
  setSearchTerm,
  setFilter,
  setLikeState,
  setLoading,
  setPlaying,
} from '../../store/actions/creators/creators';
import { addLike, disLike } from '../../api/apiGetTracks';
import { refreshToken } from '../../api/authApi';
import { Filter } from '../../components/Filter';
import { ContentTitle } from '../../components/ContentTitle';
import { durationFormatter } from '../../utils/durationFormatter';
import { tracks } from '../../constants';
import { TrackTitleSvg } from '../../utils/iconSVG/trackTitle';
import { TrackLikesMainSvg } from '../../utils/iconSVG/trackLikeMain';
import { ErrorBlock } from '../../components/ErrorBlock';
import * as S from './styles';

export const PlayList = () => {
  const dispatch = useDispatch();
  const {
    data: allTracks = [],
    isLoading,
    isError,
    refetch
  } = useGetAllTracksQuery();

  useEffect(() => {
    dispatch(setLoading(isLoading));
    if (!isLoading && !isError) {
      dispatch(setAllTracks(allTracks));
    }
  }, [isLoading, isError, allTracks, dispatch]);
  
  let music = allTracks;

  const [dataFilter, setDataFilter] = useState('По умолчанию');
  const [numberTracks, setNumberTracks] = useState(null);
  const isPlaying = useSelector((state) => state.tracks.isPlaying);
  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'));
  const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'));
  const { user } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const currentTrack = useSelector((state) => state.tracks.currentTrack);

  useEffect(() => {
    dispatch(setSearchTerm(null));
    dispatch(setFilter(null));
  }, [dispatch]);

  if (isLoading) {
    music = [...Array(12)].flatMap(() => tracks);
  }

  const toggleLike = async (item) => {
    try {
      setDisabled(true);
      if (item.stared_user.find((el) => el.id === user.id)) {
        await disLike({ token: tokenAccess, id: item.id });
        dispatch(setLikeState(false));
      } else {
        await addLike({ token: tokenAccess, id: item.id });
        dispatch(setLikeState(true));
      }
    } catch (error) {
      if (error.message === 'Токен протух') {
        const newAccess = await refreshToken(tokenRefresh);
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess));
        if (item.stared_user.find((el) => el.id === user.id)) {
          await disLike({ token: newAccess.access, id: item.id });
          dispatch(setLikeState(false));
        } else {
          await addLike({ token: newAccess.access, id: item.id });
          dispatch(setLikeState(true));
        }
        return;
      }
    } finally {
      setDisabled(false);
      refetch();
    }
  };

  const handleTrackClick = (item) => {
    dispatch(activeTrack(item));
    dispatch(setPlaying(true));
  };

  let filteredMusic = [...music];
  const symbols = useSelector((state) => state.tracks.letters);
  const filtersType = useSelector((state) => state.tracks.filterType);
  const filtersValues = useSelector((state) => state.tracks.filterValues);

  if (symbols) {
    filteredMusic = filteredMusic.filter((item) => {
      return (
        item.name.toLowerCase().includes(symbols.toLowerCase()) ||
        item.author.toLowerCase().includes(symbols.toLowerCase()) ||
        item.album.toLowerCase().includes(symbols.toLowerCase())
      );
    });
  }

  if (filtersType && filtersValues.length > 0) {
    filteredMusic = filteredMusic.filter((track) => {
      if (filtersType === 'authors') {
        return filtersValues.includes(track.author);
      } else if (filtersType === 'genres') {
        return filtersValues.includes(track.genre);
      }
      return true;
    });
  }

  if (dataFilter === 'Сначала старые') {
    filteredMusic = filteredMusic.sort(
      (a, b) => new Date(a.release_date) - new Date(b.release_date),
    );
  } else if (dataFilter === 'Сначала новые') {
    filteredMusic = filteredMusic.sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date),
    );
  }

  useEffect(() => {
    if (setNumberTracks) {
      if (filteredMusic.length > 99) {
        setNumberTracks('99+');
      } else {
        setNumberTracks(filteredMusic.length);
      }
    }
  }, [filteredMusic, setNumberTracks]);

  useEffect(() => {
    const isStared =
      currentTrack &&
      currentTrack.stared_user &&
      Array.isArray(currentTrack.stared_user) &&
      currentTrack.stared_user.some((staredUser) => staredUser.id === user.id);
    if (isStared) {
      dispatch(setLikeState(true));
    } else {
      dispatch(setLikeState(false));
    }
  }, [currentTrack, user]);

  const fullPlayList = filteredMusic.map((item, i) => {
    const { name, author, album, duration_in_seconds } = item;
    const isCurrentPlaying = currentTrack && item.id === currentTrack.id;
    const isLiked =
      Array.isArray(item.stared_user) &&
      item.stared_user.some((el) => el.id === user.id);

    return (
      <S.PlaylistItem key={i}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleComponent onClick={() => handleTrackClick(item)}>
              {!isLoading ? (
                <TrackTitleSvg
                  isCurrentPlaying={isCurrentPlaying}
                  isPlaying={isPlaying}
                />
              ) : (
                <S.SkeletonIcon></S.SkeletonIcon>
              )}
            </S.TrackTitleComponent>

            <S.TrackTitleBlock onClick={() => handleTrackClick(item)}>
              {!isLoading ? (
                <S.TrackTitleNameAuthorLink>
                  <S.TrackTitleLink>{name}</S.TrackTitleLink>
                  <S.TrackAuthorLinkMobile>{author}</S.TrackAuthorLinkMobile>
                </S.TrackTitleNameAuthorLink>
              ) : (
                <S.SkeletonTrackTitle></S.SkeletonTrackTitle>
              )}
            </S.TrackTitleBlock>
          </S.TrackTitle>

          <S.TrackAuthor onClick={() => handleTrackClick(item)}>
            {!isLoading ? (
              <S.TrackAuthorLink>{author}</S.TrackAuthorLink>
            ) : (
              <S.SkeletonTrackAuthor></S.SkeletonTrackAuthor>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {!isLoading ? (
              <S.TrackAlbumLink>{album}</S.TrackAlbumLink>
            ) : (
              <S.SkeletonTrackAuthor></S.SkeletonTrackAuthor>
            )}
          </S.TrackAlbum>
          <S.TrackTimeComponent>
            <S.LikeButton disabled={disabled} onClick={() => toggleLike(item)}>
              <TrackLikesMainSvg isLiked={isLiked} />
            </S.LikeButton>
            <S.TrackTimeText>
              {durationFormatter(duration_in_seconds)}
            </S.TrackTimeText>
          </S.TrackTimeComponent>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  });

  return (
    <>
      {isError ? (
        <ErrorBlock isError={isError} />
      ) : (
        <>
          <S.CenterBlockH2>Треки</S.CenterBlockH2>
          <Filter
            isError={isError}
            setDataFilter={setDataFilter}
            dataFilter={dataFilter}
            numberTracks={numberTracks}
          />
          <S.CenterBlockContent $isPlaying={isPlaying}>
            <ContentTitle />
            <S.ContentPlayList>{fullPlayList}</S.ContentPlayList>
          </S.CenterBlockContent>
        </>
      )}
    </>
  );
};
