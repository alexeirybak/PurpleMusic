import { useGetFavoriteTracksQuery } from '../../store/tracksApi';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAllTracks,
  activeTrack,
  setSearchTerm,
  setPlaying,
  setLikeState,
  setLoading,
} from '../../store/actions/creators/creators';
import { disLike } from '../../api/apiGetTracks';
import { ContentTitle } from '../../components/ContentTitle';
import { ErrorBlock } from '../../components/ErrorBlock';
import { refreshToken } from '../../api/authApi';
import { durationFormatter } from '../../utils/durationFormatter';
import { tracks } from '../../constants';
import { TrackTitleSvg } from '../../utils/iconSVG/trackTitle';
import { TrackLikesMainSvg } from '../../utils/iconSVG/trackLikeMain';
import * as S from '../../pages/PlayList/styles';

export const Favorites = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'));
  let tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'));

  const {
    data: favoriteMusic = [],
    isLoading,
    isError,
    refetch,
  } = useGetFavoriteTracksQuery({ token: tokenAccess?.access });

  useEffect(() => {
    const refresh = async () => {
      if (isError) {
        try {
          const newAccess = await refreshToken(tokenRefresh);
          localStorage.setItem('tokenAccess', JSON.stringify(newAccess));
          refetch();
        } catch (error) {
          error.message = 'Токен протух';
          console.error('Error refreshing access token', error);
        }
      }
    };

    refresh();
  }, [isError, refetch, tokenRefresh]);

  useEffect(() => {
    if (favoriteMusic.length === 0) {
      setMessage('Еще нет любимых треков');
    } else {
      setMessage('');
    }
  }, [favoriteMusic.length]);

  useEffect(() => {
    dispatch(setLoading(isLoading));
    if (!isLoading && !isError) {
      dispatch(setAllTracks(favoriteMusic));
      dispatch(setLikeState(true));
    }
  }, [isLoading, isError, favoriteMusic, dispatch]);

  useEffect(() => {
    dispatch(setSearchTerm(null));
  }, [dispatch]);

  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  let music = favoriteMusic;

  if (isLoading) {
    music = [...Array(12)].flatMap(() => tracks);
  }

  const handleTrackClick = (item) => {
    dispatch(activeTrack(item));
    dispatch(setPlaying(true));
  };

  const toggleLike = async (item) => {
    try {
      setDisabled(true);
      const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'));
      await disLike({ token: tokenAccess, id: item.id });
    } catch (error) {
      if (error.message === 'Токен протух') {
        const newAccess = await refreshToken(tokenRefresh);
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess));
        await disLike({ token: newAccess.access, id: item.id });
        return;
      }
    } finally {
      setDisabled(false);
      refetch();
    }
  };

  const symbols = useSelector((state) => state.tracks.letters);
  let filteredMusic = music;

  if (symbols) {
    filteredMusic = music.filter(
      (item) =>
        item.name.toLowerCase().includes(symbols.toLowerCase()) ||
        item.author.toLowerCase().includes(symbols.toLowerCase()) ||
        item.album.toLowerCase().includes(symbols.toLowerCase()),
    );
  }

  const fullPlayList = filteredMusic.map((item, i) => {
    const { name, author, album, duration_in_seconds } = item;
    const isCurrentPlaying = currentTrack && item.id === currentTrack.id;

    return (
      <S.PlaylistItem key={i}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleComponent onClick={() => handleTrackClick(item)}>
              {!isLoading ? (
                <TrackTitleSvg isCurrentPlaying={isCurrentPlaying} />
              ) : (
                <S.SkeletonIcon></S.SkeletonIcon>
              )}
            </S.TrackTitleComponent>

            <S.TrackTitleBlock onClick={() => handleTrackClick(item)}>
              {!isLoading ? (
                <S.TrackTitleLink>{name}</S.TrackTitleLink>
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
              <TrackLikesMainSvg isLiked={true} />
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
      <S.CenterBlockH2>Любимые треки</S.CenterBlockH2>
      <S.CenterBlockContent>
        <S.Message>{message}</S.Message>
        <ContentTitle />
        {isError ? (
          <ErrorBlock isError={isError} />
        ) : (
          <S.ContentPlayList>{fullPlayList}</S.ContentPlayList>
        )}
      </S.CenterBlockContent>
    </>
  );
};
