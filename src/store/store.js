import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { tracksApi } from './tracksApi';
import tracksReducer from './reducers/reducers';

const rootReducer = combineReducers({
  tracks: tracksReducer,
  [tracksApi.reducerPath]: tracksApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksApi.middleware),
});
