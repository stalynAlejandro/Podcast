import { RootState } from '../../store/redux';
import { KEY_CONSTANTS } from './constants';

export const loadState = async (): Promise<RootState | undefined> => {
    try {
        const savedState = localStorage.getItem(KEY_CONSTANTS.STATE);
        if (savedState) return JSON.parse(savedState);
    } catch (e) {
        console.log(e);
    }
    return;
};
