import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { getEmployeeById } from "../Services/employee-service"
import employeeService from "../Services/employee-service";
import "../App.css";

const EmployeeEquipments = (props) => {
    const employees = useSelector((state) => state.employees.value)
    return(
        <div>
            <Header title={"Employee Equipments"}/>
            <div className="employeeContainer">
                {employees.map(employee => {
                    return  <div>
                                <div className="employee">{employee.first_name} {employee.last_name}</div>
                                <div className="employeeItem">{ getEmployeeItems(employee.id) }</div>
                            </div>
                            })}
            </div>
        </div>
    );

}
function getEmployeeItems (employeeId) {
    employeeService.getEmployeeById().then(response => {
        console.log(response.data)
      })
      .catch(e => {
          console.error(e.message);
      })

}
export default EmployeeEquipments;
