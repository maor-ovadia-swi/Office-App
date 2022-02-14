import http from "../http-common";

const getAllItems = () => {
    return http.get(`/items`);
};

const deleteItemById = (itemId) => {
    return http.delete(`/items/${itemId}`);
};

const updateItemById = (item) => {
    return http.put(`/items/${item.id}`, item)
}

const createItem = (item) => {
    return http.post(`/items`, item)

}
export default {
    getAllItems,
    deleteItemById,
    updateItemById,
    createItem
};