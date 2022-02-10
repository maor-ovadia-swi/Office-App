import React, { useState } from "react";
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
import Header from "./Header";
import "./EmployeePage.css";
import capitalize from "../Utils/CapitalizeWords"
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const EmployeePage = (props) => {
    const [items, setItems] = useState([]);
    const [edit, setEdit] = useState({
        id: null,
        value: ''
        });    
    const {empID} = useParams()
    const employees = useSelector((state) => state.employees.value)
    const allItems = useSelector((state) => state.items.value)

    const addItem = item => {
        const newItems = [item, ...items];
    
        setItems(newItems);
        console.log(...items);
        };
    
        const updateItem = (itemId, newValue) => {
        setItems(prev => prev.map(item => (item.id === itemId ? newValue : item)));
        };
    
        const removeItem = id => {
        const removedArr = [...items].filter(item => item.id !== id);
    
        setItems(removedArr);
        };
        const submitUpdate = value => {
        updateItem(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };
    if(allItems.length === 0 || employees.length === 0){
        return (
            <h1>Loading...</h1>
        );
    }
    else{
        const employee = employees.find(emp => emp.id == empID)
        var employeeItems = allItems.filter((item) => item.employee_id === employee.id)

        return(
            <div>
                <Header title={`${capitalize(employee.first_name)} ${capitalize(employee.last_name)} Equipments`}/>
                        {employeeItems.map((item, i, row) => {
                            return(
                                <div className="item-container">
                                    <div className="item-row" key={item.id}>
                                        {capitalize(item.name)}
                                    </div>
                                    <div className='icons'>
                                    <RiCloseCircleLine
                                    onClick={() => removeItem(item.id)}
                                    className='delete-icon'
                                    />
                                    <TiEdit
                                    onClick={() => setEdit({ id: item.id, value: item.name })}
                                    className='edit-icon'
                                    />
                                    </div>
                                </div>
                                
                            )
                        })}
            </div>
            );
    }
}

export default EmployeePage;
