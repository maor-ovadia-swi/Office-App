import React from 'react';
import { useDispatch } from 'react-redux';
import { itemsActions } from '../Store';
import itemService from '../Services/item-service'
import './ItemForm.css'

function ItemForm(props) {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if(props.title === "Add New Item") {
            const name = event.target.name.value;
            itemService.createItem({name: name}).then(() => {
                itemService.getAllItems().then(response => {
                    dispatch(itemsActions.setItems(response.data));
                    props.closePopup();
                })
        }).catch(e => {
            console.error(e.message);
        })
        }

        else {
            const name = event.target.name;
            itemService.updateItemById(props.item.id).then(() => {
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
                <input placeholder={props.item ? props.item.name : ""} name='name'/>
                <br></br>
                <input id="submit" type='submit'/>
                <a className='close' onClick={props.closePopup}>X</a>
            </form>
        </div>
    </div>
);
}

export default ItemForm;
