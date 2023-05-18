import { configureStore, createSlice } from "@reduxjs/toolkit";

const initalCounterState = {
  counter: 0,
  showCounter: true,
};

// Counter Redux
const counterSlice = createSlice({
  // name of the slice
  name:'counter',
  // inintal state of the slice
  initialState:initalCounterState,
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
  
});

const initalAuthState = {
  isAuthenticate:false
}

// new slice for the Authentication
const authSlice =  createSlice({
  name:"Auth",
  initialState:initalAuthState,
  reducers:{
    login(state){
      state.isAuthenticate = true;
    },
    logout(state){
      state.isAuthenticate = false;
    }
  }

});


const store = configureStore({
  reducer:{
    counterReducer : counterSlice.reducer,
    authReducer:authSlice.reducer
  }
})

export default store;

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
