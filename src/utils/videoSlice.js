import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos: null,
        channelThumbnail: {}
    },
    reducers: {
        addVideos: (state, action) => {
            state.videos = action.payload
        },
        addChannelThumbail: (state, action) => {
            state.channelThumbnail = {...state.channelThumbnail, ...action.payload}
        }
    }
})

export const {addVideos, addChannelThumbail} = videoSlice.actions

export default videoSlice.reducer