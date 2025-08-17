import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        videoComments: [],
    },
    reducers: {
        addVideoComments: (state, action) => {
            state.videoComments = [...state.videoComments, ...action.payload];
        },
        removeVideoComments: (state) => {
            state.videoComments = [];
        }
    }
})

export const {addVideoComments, removeVideoComments} = commentsSlice.actions

export default commentsSlice.reducer