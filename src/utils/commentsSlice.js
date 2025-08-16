import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        videoComments: null,
    },
    reducers: {
        addVideoComments: (state, action) => {
            state.videoComments = action.payload
        }
    }
})

export const {addVideoComments} = commentsSlice.actions

export default commentsSlice.reducer