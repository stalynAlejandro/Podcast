import { loadState, saveState } from '../store/async';
import { configureStore, Store } from '@reduxjs/toolkit';
import { rootReducer, emptyStore } from '../store/redux';
import { useLayoutEffect, useState } from 'react';

export function useAppState(): Store {
    const [store, setStore] = useState<Store>(emptyStore);

    const fn = async () => {
        const localStorage = await loadState();
        if (localStorage) {
            const storeWithLocalStorage = configureStore({
                reducer: rootReducer,
                preloadedState: localStorage,
            });
            setStore(storeWithLocalStorage);
        }
    };

    useLayoutEffect(() => {
        fn();
    }, []);

    store.subscribe(() => saveState(store.getState()));
    return store;
}
