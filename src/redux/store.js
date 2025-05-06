import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from "./features/settingsSlice";
import themeReducer from "./features/themeReducer";

const store = configureStore({
    reducer:{
    theme:themeReducer,
    settings: settingsReducer,
    }
});

export default store;