import http from "../http-common";

const getAllItems = () => {
    return http.get(`/items`);
};

const deleteItemById = (itemId) => {
    return http.delete(`/items/${itemId}`);
};

export default {
    getAllItems,
    deleteItemById
};