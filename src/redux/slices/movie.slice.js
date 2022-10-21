import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    searchResult: [],
    errors: null,
    loading: false,
    currentTheme: ''
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({currentPage}, {rejectWithValue})=>{
        try {
         const {data} = await movieService.getAll(currentPage)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const search = createAsyncThunk(
    'movieSlice/search',
    async ({title}, {rejectWithValue })=>{
        try {
            const {data} = await movieService.searchByTitle(title)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        newTheme: (state, action)=> {
            state.currentTheme = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.movies = action.payload
                state.loading = false
                state.errors = null
            })
            .addCase(getAll.pending, (state)=>{
                state.loading = true
                state.errors = null
            })
            .addCase(search.fulfilled, (state, action)=>{
                state.movies = []
                state.searchResult = action.payload
                state.loading = false
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

const {reducer: movieReducer, actions:{newTheme}} = movieSlice

const movieActions = {
    getAll,
    search,
    newTheme
}

export {movieReducer, movieActions}


