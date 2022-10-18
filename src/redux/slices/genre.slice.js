import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState ={
    genres: [],
    loading: false,
    errors: null
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data.genres
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice/',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.genres = action.payload
                state.loading = false
                state.errors = null
            })
            .addCase(getAll.pending, (state, action)=>{
                state.loading = true
                state.errors = null
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

const {reducer: genreReducer, actions:{}} = genreSlice

const genreActions ={
    getAll
}

export {genreReducer, genreActions}










