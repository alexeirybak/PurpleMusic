import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { musicCategory } from '../../constants';
import {
  useGetAllTracksQuery,
  useGetCategoryTracksQuery,
} from '../../store/tracksApi';
import { activeTrack, setPlaying } from '../../store/actions/creators/creators';
import { refreshToken } from '../../api/authApi';
import { addLike } from '../../api/apiGetTracks';
import { disLike } from '../../api/apiGetTracks';
import { TrackPlaySvg } from '../../utils/iconSVG/trackPlay';
import { TrackPlayLikeSvg } from '../../utils/iconSVG/trackPlayLike';
import * as S from './styles';

export const PlayerTrackPlay = () => {
  const params = useParams();
  const isPlaying = useSelector((state) => state.tracks.isPlaying);
  const dispatch = useDispatch();
  const { refetch: refetchAllTracks } = useGetAllTracksQuery();
  const { refetch: refetchCategoryTracks } = useGetCategoryTracksQuery({
    id: params.id,
  });

  useEffect(() => {
    dispatch(setPlaying(isPlaying));
  }, [dispatch, isPlaying]);

  const isLoading = useSelector((state) => state.tracks.isLoading);
  const [disabled, setDisabled] = useState(false);
  const getTrack = useSelector(activeTrack);
  const currentTrack = getTrack.payload.track.tracks.currentTrack;
  const [isLiked, setIsLiked] = useState(null);

  const isLikedTracks = useSelector((state) => state.tracks.isLiked);
  useEffect(() => {
    if (isLikedTracks) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [isLikedTracks]);

  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'));
  const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'));

  const toggleLike = async (item = currentTrack) => {
    try {
      setDisabled(true);
      if (isLiked) {
        await disLike({ token: tokenAccess, id: item.id });
      } else {
        await addLike({ token: tokenAccess, id: item.id });
      }
      setIsLiked(!isLiked);
    } catch (error) {
      if (error.message === 'Токен протух') {
        const newAccess = await refreshToken(tokenRefresh);
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess));
        if (isLiked) {
          await disLike({ token: newAccess.access, id: item.id });
        } else {
          await addLike({ token: newAccess.access, id: item.id });
        }
        setIsLiked(!isLiked);
        return;
      }
    } finally {
      setDisabled(false);
      refetchAllTracks();
      refetchCategoryTracks();
    }
  };

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayerContain>
        {!isLoading ? (
          <S.TrackPlayerImage>
            <S.TrackPlayerBlock>
              <TrackPlaySvg />
            </S.TrackPlayerBlock>
          </S.TrackPlayerImage>
        ) : (
          <S.SkeletonIcon></S.SkeletonIcon>
        )}
        {!isLoading ? (
          <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink>{currentTrack.name}</S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
        ) : (
          <S.SceletonAuthor></S.SceletonAuthor>
        )}
        {!isLoading ? (
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink>{currentTrack.author}</S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
        ) : (
          <S.SceletonAlbum></S.SceletonAlbum>
        )}
      </S.TrackPlayerContain>
      <S.TrackPlayLikesDisplay>
        <S.TrackPlayLike
          disabled={disabled}
          onClick={() => toggleLike(currentTrack)}
        >
          <TrackPlayLikeSvg isLiked={isLiked} />
        </S.TrackPlayLike>
      </S.TrackPlayLikesDisplay>
    </S.PlayerTrackPlay>
  );
};
