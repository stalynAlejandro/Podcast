import { podcastReducer } from './podcast';
import { useDispatch } from 'react-redux';
import { UnknownAction, ThunkDispatch, configureStore, combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    podcasts: podcastReducer,
});

export const emptyStore = configureStore({ reducer: rootReducer });

const _getDispatch = () => emptyStore.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof _getDispatch>;

export const useAppDispatch = (): ThunkDispatch<RootState, undefined, UnknownAction> => useDispatch<AppDispatch>();
