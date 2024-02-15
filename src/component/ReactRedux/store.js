import {configureStore} from "@reduxjs/toolkit"
import messageReducer from "./Slice/messageSlice"
import notesSlice from "./Slice/notesSlice"

export default configureStore({
    reducer:{
        messageReducer,
        noteReducer :notesSlice,
    }
})