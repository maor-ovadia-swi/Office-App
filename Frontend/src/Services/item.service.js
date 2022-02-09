import http from "../http-common";

const getAllItems = () => {
    return http.get(`/items`);
};

export default {
    getAllItems
};