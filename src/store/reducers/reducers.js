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
} from '../actions/types/types.js';

const initialState = {
  track: null,
  shuffled: false,
  shuffledPlaylist: [],
  allTracks: [],
  letters: '',
  filters: '',
  filterByAuthors: [],
  filterByGenres: [],
  isLiked: null,
  isLoading: true,
  isPlaying: false,
};

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_TRACKS: {
      const { tracks } = action.payload;
      return {
        ...state,
        allTracks: tracks,
      };
    }

    case SET_CURRENT_TRACK: {
      const { track } = action.payload;
      return {
        ...state,
        currentTrack: track,
      };
    }

    case NEXT_TRACK: {
      const { track } = action.payload;
      return {
        ...state,
        currentTrack: track,
      };
    }

    case PREV_TRACK: {
      const { track } = action.payload;
      return {
        ...state,
        currentTrack: track,
      };
    }

    case TOGGLE_SHUFFLED: {
      const { shuffledPlaylist, shuffled } = action.payload;
      return {
        ...state,
        shuffled: !shuffled,
        shuffledPlaylist,
      };
    }

    case SEARCH: {
      const { letters } = action.payload;
      return {
        ...state,
        letters,
      };
    }

    case FILTERS: {
      const { filterType, filterValues } = action.payload;
      return {
        ...state,
        filterType,
        filterValues,
      };
    }

    case SET_LIKE_STATE: {
      const { isLiked } = action.payload;
      return {
        ...state,
        isLiked,
      };
    }

    case SET_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      };
    }

    case SET_PLAYING: {
      const { isPlaying } = action.payload;
      return {
        ...state,
        isPlaying,
      };
    }

    default:
      return state;
  }
}
