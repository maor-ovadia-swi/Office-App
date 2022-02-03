import React from "react";
import { useSelector } from "react-redux";

const EmployeeEquipments = (props) => {
    const employees = useSelector((state) => state.employees.value)
    return(
        employees.map(employee => {
            return <h1>{employee.first_name} {employee.last_name}</h1>})
    );
}

export default EmployeeEquipments;
