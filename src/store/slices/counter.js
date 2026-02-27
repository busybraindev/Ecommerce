import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cv: 0
}

export const Cs=createSlice({
    name:'counter',
    initialState,
    reducers: {
        Hc: (state,action)=>{
            state.cv+=1
        // console.log(state,action);
        
        }
    }
})

export const{Hc}=Cs.actions;
export default Cs.reducer;