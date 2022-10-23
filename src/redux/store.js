import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, userReducer} from "./slices";


const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    userReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}