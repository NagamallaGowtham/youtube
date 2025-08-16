import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        toggleMenu: false,
    },
    reducers: {
        addtoggleMenu: (state) => {
            state.toggleMenu = !state.toggleMenu
        }
    }
})

export const {addtoggleMenu} = menuSlice.actions

export default menuSlice.reducer