import React, {useEffect} from 'react';
import './App.css';
import employeeService from './Services/employee-service';
import { useSelector, useDispatch } from 'react-redux'
import { employeesActions } from './Store/index'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getData(dispatch)
  }, [dispatch])
  const employees = useSelector((state) => state.employees.value)

  return (
    <div>
        {
          employees.map(employee => {
            return <h1>{employee.first_name} {employee.last_name}</h1>})
        }    
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