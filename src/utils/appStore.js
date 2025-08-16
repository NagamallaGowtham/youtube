import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '../utils/menuSlice'
import videoReducer from '../utils/videoSlice'
import commentsReducer from '../utils/commentsSlice'

const appStore = configureStore({
    reducer: {
        menu: menuReducer,
        video: videoReducer,
        comments: commentsReducer,
    }
})

export default appStore