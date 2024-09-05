import { createSlice } from "@reduxjs/toolkit";


const resultSlice = createSlice({
    name: "result",
    initialState: {
        searchResults: []
    },
    reducers: {
        addResults: (state, action)=>{
            state.searchResults = [ ...action.payload]
        }
    }
})

export const {addResults} = resultSlice.actions
export default resultSlice.reducer