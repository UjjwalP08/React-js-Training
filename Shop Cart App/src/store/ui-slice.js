import { createSlice } from "@reduxjs/toolkit";
// use for the cart button when use toggle the button ,button will hide or show

const initialState = {
    isCartVisible:false
}

const uiSlice = createSlice({
    name:'ui',
    initialState:initialState,
    reducers:{
        toggle(state){
            state.isCartVisible = !state.isCartVisible;
        }
    }
})

export const uiAction = uiSlice.actions;

export default uiSlice;