export const avalibleStore = (state) => {
    let len = state.Product[0].store.length;
    return len - 1;
};
export const getStoreId = (state) => (id) => {
    return state.Stores.find((prod) => prod.id === id);
};
