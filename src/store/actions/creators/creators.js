import {
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SHUFFLED,
  ALL_TRACKS,
  SEARCH,
  FILTERS,
  SET_LIKE_STATE,
  SET_LOADING,
  SET_PLAYING,
} from '../types/types';

export const setAllTracks = (tracks) => ({
  type: ALL_TRACKS,
  payload: {
    tracks,
  },
});

export const activeTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    track,
  },
});

export const nextTrack = (track) => ({
  type: NEXT_TRACK,
  payload: {
    track,
  },
});

export const prevTrack = (track) => ({
  type: PREV_TRACK,
  payload: {
    track,
  },
});

export const toggleShuffled = (shuffledPlaylist, shuffled) => ({
  type: TOGGLE_SHUFFLED,
  payload: {
    shuffledPlaylist,
    shuffled,
  },
});

export const setSearchTerm = (letters) => ({
  type: SEARCH,
  payload: {
    letters,
  },
});

export const setFilter = (filterType, filterValues) => ({
  type: FILTERS,
  payload: {
    filterType,
    filterValues,
  },
});

export const setLikeState = (isLiked) => ({
  type: SET_LIKE_STATE,
  payload: {
    isLiked,
  },
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: {
    isLoading,
  },
});

export const setPlaying = (isPlaying) => ({
  type: SET_PLAYING,
  payload: {
    isPlaying,
  },
});
