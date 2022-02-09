import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import "../App.css";

const EmployeeEquipments = (props) => {
    const employees = useSelector((state) => state.employees.value)
    const items = useSelector((state) => state.items.value)
 
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
                <div className="employeeContainer">
                    {employees.map((employee) => {
                        var employeeItems = items.filter((item) => item.employee_id === employee.id)
                        return  <div>
                                    <div key={employee.id} className="employee">{employee.first_name} {employee.last_name}</div>
                                    {employeeItems.map((item) => {
                                        return(
                                            <ul style={{display:"inline-block"}}>
                                                <li style={{display:"table-cell"}} key={item.id}> {item.name}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                                })}
                </div>
            </div>
            );
    }
}
export default EmployeeEquipments;
