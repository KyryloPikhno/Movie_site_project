import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";


const initialState ={
    user: [],
    loading:false,
    error:null
}

const getUser = createAsyncThunk(
    'userSlice/getUser',
    async (_,{rejectWithValue})=>{
        try{
            const{data}= await userService.getUser()
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)


const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getUser.fulfilled, (state, action)=>{
                state.user = action.payload
                state.loading = false
                state.errors = null
            })
            .addCase(getUser.pending,(state,action)=>{
                state.loading = action.payload
                state.loading = true
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
    }
})

const {reducer:userReducer} = userSlice

const userActions ={
    getUser
}

export{userReducer, userActions}