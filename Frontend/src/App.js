import React, {useEffect} from 'react';
import './App.css';
import employeeService from './Services/employee-service';
import { useDispatch } from 'react-redux'
import { employeesActions, itemsActions } from './Store/index'
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome'
import { Routes, Route } from "react-router-dom";
import EmployeeEquipments from './Components/EmployeeEquipments';
import OfficeDays from './Components/OfficeDays';
import EmployeePage from './Components/EmployeePage';
import itemService from './Services/item.service';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getData(dispatch)
  }, [dispatch])
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/employee_equipments" element={<EmployeeEquipments />} />
        <Route path="/employees/:empID" element={<EmployeePage />} />
        <Route path="/office_days" element={<OfficeDays />} />
      </Routes>
    </div>
  )
}

export default App;
  
function getData(dispatch){
  employeeService.getAllEmployees().then(response => {
    dispatch(employeesActions.setEmployees(response.data))
  })
  .catch(e => {
      console.error(e.message);
  })
  itemService.getAllItems().then(response => {
    dispatch(itemsActions.setItems(response.data))
  })
  .catch(e => {
      console.error(e.message);
  })
}