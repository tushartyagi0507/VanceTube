import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: "app",
    initialState: {
        showSideBar: true,
    },
    reducers: {
    toggleMenu: (state)=>{
     state.showSideBar = !state.showSideBar
    },
    }
})
export const {toggleMenu} = appSlice.actions
export default appSlice.reducer