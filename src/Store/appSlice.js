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

    closeMenu: (state)=> {
        state.showSideBar = false
    }
    }
})
export const {toggleMenu, closeMenu} = appSlice.actions
export default appSlice.reducer