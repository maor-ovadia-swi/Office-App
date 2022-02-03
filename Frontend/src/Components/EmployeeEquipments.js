import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const EmployeeEquipments = (props) => {
    const employees = useSelector((state) => state.employees.value)
    return(
        <div>
            <Header title={"Employee Equipments"}/>
            {employees.map(employee => {
                return <h1>{employee.first_name} {employee.last_name}</h1>})}
        </div>
    );

}

export default EmployeeEquipments;
