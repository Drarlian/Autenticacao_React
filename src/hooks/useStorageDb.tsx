
const useStorageDb = () => ({
    setItem: (key: string, item: string) => {
        return localStorage.setItem(key, item);
    },
    getItem: (key: string) => {
        return localStorage.getItem(key);
    },
    deleteItem: (key: string) => {
        return localStorage.removeItem(key);
    }
});


export default useStorageDb;