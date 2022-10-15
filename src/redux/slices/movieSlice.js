import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    errors: null,
    loading: false
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
         const {data} = await movieService.getAll()
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.movies = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getAll.pending, (state, action)=>{
                state.loading = true
                state.error = null
            })
            .addDefaultCase((state,action)=>{
                const [pathElement] = action.type.split('/').splice(-1)
                if(pathElement === 'rejected'){
                    state.errors = action.payload
                    state.loading = false
                }else{
                    state.errors = null
                }
            })
})

const {reducer: movieReducer, actions} = movieSlice

const movieActions = {
    getAll
}

export {movieReducer, movieActions}


