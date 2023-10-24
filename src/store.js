import { configureStore } from "@reduxjs/toolkit";
import {playerReducer} from "./redux/playerSlice";

const store = configureStore({
    reducer: {
        player: playerReducer,
    },
});

export default store;
