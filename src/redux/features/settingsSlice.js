import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
    name:"settings",
    initialState:{
        language:"en",
        currency:"INR",
    },
    reducers:{
        setLanguage:(state,action)=>{
            state.language =action.payload;
        },
        setCurrency:(state,action)=> {
            state.currency = action.payload;
        },
    },
});

export const {setLanguage, setCurrency} = settingSlice.actions;
export default settingSlice.reducer;
