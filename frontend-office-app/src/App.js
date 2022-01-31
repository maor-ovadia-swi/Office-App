import React, { useState } from 'react';
import './App.css';
import employeeService from './Services/employee-service';

function App() {
    const [employees, setEmployees] = useState([]);
    const [isArrived, setIsArrived] = useState(false);
    if(!isArrived){
      employeeService.getAllemployees().then(response => {
        console.log(response)
        console.log(response.data)
        setEmployees(response.data)
        setIsArrived(true)
      })
      .catch(e => {
          console.error(e.message);
      });
    }
    
  if(isArrived)
    return(
        <getData employees={employees}/>
      );
  else
    return(
      <div>
        <h1>
          keep wating...
        </h1>
      </div>
    )
}

export default App;
  
const getData = (props) => {
return(
<div>
    <ul>
      {props.employees.map(emp => {
        return <li>{emp.first_name + " " + emp.last_name}</li>
      })}
    </ul>
</div>
)
}