import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import "./EmployeeEquipments.css";
import capitalize from "../Utils/CapitalizeWords"

const EmployeeEquipments = (props) => {
    const employees = useSelector((state) => state.employees.value)
    const items = useSelector((state) => state.items.value)
 
    const EmployeeRow = () => {
        return (
            employees.map((employee) => {
            var employeeItems = items.filter((item) => item.employee_id === employee.id)
            return (
                <div className="employeeContainer" key={employee.id + "cont"}>
                    <div className="employeeName" key={employee.id}>
                        <p><a href={`/employees/${employee.id}`}>{capitalize(employee.first_name)} {capitalize(employee.last_name)}</a></p>
                    </div>
                    <ul className="employeeItems" key={employee.id+"ul"}>
                        {employeeItems.map((item, i, row) => {
                            return(
                                <li key={item.id}> {i + 1 === row.length ? capitalize(item.name) : capitalize(item.name) + ","}</li>
                            )
                        })}
                    </ul>
                </div>
                )}
            ))
    }
    if(!items & !employees){
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
    else{
        return(
            <div>
                <Header title={"Employee Equipments"}/>
                <EmployeeRow/>
            </div>
            );
    }
}



export default EmployeeEquipments;
