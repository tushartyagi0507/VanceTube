import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice  from "./searchSlice";
import ChatSlice from "./ChatSlice";
import resultSlice from "./resultSlice";


const store = configureStore({
reducer: {
app: appSlice,
search: searchSlice,
chat: ChatSlice,
result: resultSlice
}
})

export default store