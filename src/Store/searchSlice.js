import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        addCache: (state,action)=>{
          return  {...action.payload, ...state}
        }
    }
})

export const {addCache} = searchSlice.actions;
export default searchSlice.reducer