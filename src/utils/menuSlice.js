import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        toggleMenu: false,
    },
    reducers: {
        addtoggleMenu: (state, action) => {
            state.toggleMenu = action.payload ? action.payload : !state.toggleMenu
        }
    }
})

export const {addtoggleMenu} = menuSlice.actions

export default menuSlice.reducer