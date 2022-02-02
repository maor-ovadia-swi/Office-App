import http from "../http-common";

const getAllemployees = () => {
    return http.get(`/employees`);
};

const getEmployeeById = (employeeId) => {
    return http.get(`/employees/${employeeId}`);
}

const deleteEmployeeById = (employeeId) => {
    return http.delete(`/employees/${employeeId}`);
};
export default {
    getAllemployees,
    getEmployeeById,
    deleteEmployeeById
};