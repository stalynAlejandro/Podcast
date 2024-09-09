import { Podcast } from '../../../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IPodcastSlice = {
    pods: {
        feed: {
            entry: []
        },
    },
    lastModified: undefined
};

interface IPodcastSlice {
    pods: Podcast;
    lastModified: string | undefined
}

const podcastSlice = createSlice({
    name: 'podcast',
    initialState,
    reducers: {
        setPodcast(state, action: PayloadAction<{pods: Podcast; lastModified: string}>) {
            state.pods = action.payload.pods
            state.lastModified = action.payload.lastModified
        }
    },
});

export const { setPodcast } = podcastSlice.actions;
export const podcastReducer = podcastSlice.reducer;
