import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos: [],
        channelThumbnail: {},
        nextToken: ""
    },
    reducers: {
        addVideos: (state, action) => {
            state.videos = [...state.videos, ...action.payload]
        },
        addChannelThumbail: (state, action) => {
            state.channelThumbnail = {...state.channelThumbnail, ...action.payload}
        },
        addNextToken: (state, action) => {
            state.nextToken = action.payload
        }
    }
})

export const {addVideos, addChannelThumbail, addNextToken} = videoSlice.actions

export default videoSlice.reducer