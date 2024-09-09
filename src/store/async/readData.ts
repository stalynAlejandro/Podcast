export const readData = async (key: string): Promise<string | undefined> => {
    try {
        const data = localStorage.getItem(key);
        if (data) return JSON.parse(data);
    } catch (e) {
        console.error(e);
    }
    return;
};
