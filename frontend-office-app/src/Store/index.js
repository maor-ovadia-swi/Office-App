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
const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer,
    }
});
export const employeesActions = employeesSlice.actions;
export default store;








