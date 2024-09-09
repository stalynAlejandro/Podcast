import { RootState } from '../../store/redux';
import { KEY_CONSTANTS } from './constants';

export const saveState = async (state: RootState): Promise<void> => {
    try {
        const serializedSate = JSON.stringify(state);
        localStorage.setItem(KEY_CONSTANTS.STATE, serializedSate);
    } catch (e) {
        console.log(e);
    }
};
