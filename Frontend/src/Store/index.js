import { createSlice, configureStore } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
    name: 'employees',
    initialState: { 
        value: [], 
    },
    reducers: {
        setEmployees(state, action){
            state.value = action.payload;
        }
    }
});
const itemsSlice = createSlice({
    name: 'items',
    initialState: { 
        value: [], 
    },
    reducers: {
        setItems(state, action){
            state.value = action.payload;
        }
    }
});
const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer,
        items: itemsSlice.reducer
    }
});
export const employeesActions = employeesSlice.actions;
export const itemsActions = itemsSlice.actions;
export default store;








