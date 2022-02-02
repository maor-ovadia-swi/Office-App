import React, {useEffect} from 'react';
import './App.css';
import employeeService from './Services/employee-service';
import { useSelector, useDispatch } from 'react-redux'
import { employeesActions } from './Store/index'
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome'
import { Routes, Route } from "react-router-dom";
import EmployeeEquipments from './Components/EmployeeEquipments';
import OfficeDays from './Components/OfficeDays';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getData(dispatch)
  }, [dispatch])
  const employees = useSelector((state) => state.employees.value)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/employee_equipments" element={<EmployeeEquipments />} />
        <Route path="/office_days" element={<OfficeDays />} />
      </Routes>

        {/* {
          employees.map(employee => {
            return <h1>{employee.first_name} {employee.last_name}</h1>})
        }     */}
    </div>
  )
}

export default App;
  
function getData(dispatch){
  employeeService.getAllemployees().then(response => {
    console.log(response.data)
    dispatch(employeesActions.setEmployees(response.data))
  })
  .catch(e => {
      console.error(e.message);
  })
}