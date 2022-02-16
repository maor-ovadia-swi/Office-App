import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom';
import Header from "./Header";
import "./EmployeePage.css";
import capitalize from "../Utils/CapitalizeWords"
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import itemService from "../Services/item-service";
import { itemsActions } from '../Store/index'
import ItemForm from "./ItemForm";

const EmployeePage = (props) => {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();
    const {empID} = useParams()
    const employees = useSelector((state) => state.employees.value)
    const allItems = useSelector((state) => state.items.value);
    const [editItem, setEditItem] = useState("");


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

    const handleUpdateItem = (props) => {
        setTitle("Edit Item");
        setEditItem(props)
        togglePopup();
    }

    const handleAddItem = () => { 
        setEditItem("");
        setTitle("Add New Item");
        togglePopup();
    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

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
        var employeeItemsMap = employeeItems.reduce(function (c, empItem) {
            c[empItem.name.toLowerCase()] = (c[empItem.name.toLowerCase()] || 0) + 1;
            return c;
        }, Object.create(null)); 
        employeeItems = employeeItems.filter((v,i,a)=>a.findIndex(t=>(t.name===v.name))===i)
        return(
            <div>
                <Header title={`${capitalize(employee.first_name)} ${capitalize(employee.last_name)} Equipments`}/>
                <div className="item-container">
                    {employeeItems.map((item) => {
                        return(
                            <div className="item-row" key={item.id}>
                                {capitalize(item.name) + (employeeItemsMap[item.name.toLowerCase()] > 1 ? " x" + employeeItemsMap[item.name.toLowerCase()] : "")}
                                <div className='icons'>
                                <RiCloseCircleLine
                                onClick={() => removeItem(item.id)}
                                className='delete-icon'
                                />
                                <TiEdit
                                onClick={() => handleUpdateItem({ id: item.id, name: item.name })}
                                className='edit-icon'
                                />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="add-button-container">
                    <a className="add-button" onClick={handleAddItem}>Add New Item</a>
                </div>
                {showPopup ? <ItemForm closePopup={togglePopup} title={title} item={editItem} empID={empID}/> : null}
            </div>
            );
    }
}

export default EmployeePage;
