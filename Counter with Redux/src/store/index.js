import { configureStore, createSlice } from "@reduxjs/toolkit";

const initalState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  // name of the slice
  name:'counter',
  // inintal state of the slice
  initialState:initalState,
  // reducer functions
  reducers:{
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state,action){
      state.counter = state.counter + action.payload;
    },
    toggle(state){
      state.showCounter = !state.showCounter;
    },
  }
  
})

const store = configureStore({
  reducer:counterSlice.reducer
})

export default store;

export const counterAction = counterSlice.actions;
