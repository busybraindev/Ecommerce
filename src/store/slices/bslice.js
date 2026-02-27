import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    fd: {
        title:'',
        description:""
    },
    bL:[],
    cE:null
}



export const bs =createSlice({
    name:"blog",
    initialState,
    reducers:{
        hI:(state,action)=>{
            console.log(state.fd );
            
            // console.log(action);
            let cf={...state.fd}
            cf={
                ...cf,
                ...action.payload
            }
            
         state.fd = cf
        },
        hT:(state,action) =>{
            console.log(action);
            state.bL.push({
                id:nanoid(),
                ...state.fd,
            })
            state.fd={
                title:"",
                description:""
            }

            localStorage.setItem("bl",JSON.stringify(state.bL))
            
        },
        sbL:(state,action)=>{
            state.bL=action.payload.bL
        },
        hD:(state,action)=>{
            const{payload}=action
            const{id}=payload;
            let cpy= [...state.bL]
            cpy= cpy.filter(bi=>bi.id!== id)

          state.bL = cpy
            localStorage.setItem("bl",JSON.stringify(state.bL))
        },
        scE:(state,action)=>{
            const{payload}=action
            const{id}=payload;
            console.log(action.payload);
            state.cE=id
            

        },
        hb:(state,action)=>{
            let cp= [...state.bL]
            const fc=cp.findIndex(sb=> sb.id===state.cE)
            console.log(fc);
            cp[fc]={
                ...cp[fc],
                ...state.fd
            }
            state.bL= cp
             localStorage.setItem("bl",JSON.stringify(state.bL))

        }
    }
})
export const {hI,hT,sbL,hD,scE,hb}=bs.actions
export default bs.reducer