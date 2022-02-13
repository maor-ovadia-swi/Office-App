import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom';
import Header from "./Header";
import "./EmployeePage.css";
import capitalize from "../Utils/CapitalizeWords"
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import itemService from "../Services/item.service";
import { itemsActions } from '../Store/index'

const EmployeePage = (props) => {
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState({
        id: null,
        value: ''
        });    
    const {empID} = useParams()
    const employees = useSelector((state) => state.employees.value)
    const allItems = useSelector((state) => state.items.value);
    const addItem = item => {
    const newItems = [item, ...items];
        setItems(newItems);
        console.log(...items);
    };
    
    const updateItem = (itemId, newValue) => {
        setItems(prev => prev.map(item => (item.id === itemId ? newValue : item)));
    };
    
    const removeItem = (id) => {
        const removedArr = [...items].filter(item => item.id !== id);
        itemService.deleteItemById(id).then(() => {
            dispatch(itemsActions.setItems(removedArr))
            setItems(removedArr)
        })
        .catch(e => {
            console.error(e.message);
        })
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
        if(items.length === 0){
            setItems(allItems)
        }
        const employee = employees.find(emp => emp.id === Number(empID))
        var employeeItems = items.filter((item) => item.employee_id === employee.id)

        return(
            <div>
                <Header title={`${capitalize(employee.first_name)} ${capitalize(employee.last_name)} Equipments`}/>
                <div className="item-container">
                    {employeeItems.map((item, i, row) => {
                        return(
                            <div className="item-row" key={item.id}>
                                {capitalize(item.name)}
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
                <div className="add-button-container">
                    <a href="something" className="add-button">Add New Item</a>
                </div>
            </div>
            );
    }
}


export default EmployeePage;
