export const storeData = async (key: string, value: string) => {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (e) {
        // saving error
        console.error(e);
    }
};
