import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemsActions } from '../Store';
import itemService from '../Services/item-service'
import './ItemForm.css'

function ItemForm(props) {
    const [input, setInput] = useState(props.item ? props.item.name : "")
    const dispatch = useDispatch();
    const handleInputeChange= (e)=> {
        setInput(e.target.value);
    }
    const handleSubmit = (event) => {
        if(props.title === "Add New Item") {
            const name = event.target.name.value;
            itemService.createItem({name: name, employee_id: props.empID}).then(() => {
                itemService.getAllItems().then(response => {
                    dispatch(itemsActions.setItems(response.data));
                    props.closePopup();
                })
        }).catch(e => {
            console.error(e.message);
        })
        }

        else {
            const updatedName = event.target.name.value;
            itemService.updateItemById({id: props.item.id, name: updatedName}).then(() => {
                itemService.getAllItems().then(response => {
                    dispatch(itemsActions.setItems(response.data));
                    props.closePopup();
                })
        }).catch(e => {
            console.error(e.message);
        })
        }
    }
return (
    <div className='popup'>
        <div className='popup_inner'>
            <h1>{props.title}</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type={"text"} value={input} name='name' onChange={handleInputeChange}/>
                <br></br>
                <input id="submit" type='submit'/>
                <a className='close' onClick={props.closePopup}>X</a>
            </form>
        </div>
    </div>
);
}

export default ItemForm;
