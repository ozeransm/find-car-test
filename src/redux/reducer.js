import { combineReducers, createSlice } from '@reduxjs/toolkit'
import { fetchDatas } from './operations'

export const data = createSlice({
  name: 'counter',
    initialState: {
        value: 1,
        isLoading: false,
        error: null,
        data: [],
        filter: null,
        dataModal: {},
        favorite: [],
  },
  reducers: {
      increment: (state) => {
      state.value += 1
    },
      decrement: (state) => {
      state.value -= 1
    },
      initValue: (state, action) => {
        state.value = 1
              
    },
      initData: (state, action) => {
        state.data = []  
    },
      initFavorite: (state, action) => {
          state.favorite = []      
    },
      setDataModal: (state, action) => {
        state.dataModal = { ...action.payload };
        
    },
      setFavorite: (state, action) => {
        state.favorite.push(action.payload)
    },
      delFavorite: (state, action) => {
        state.favorite = [...state.favorite.filter((el)=>el!==action.payload)]
    }  
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDatas.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchDatas.fulfilled, (state, action) => {
                state.data.push(...action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchDatas.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { increment, decrement, initValue, setDataModal, setFavorite, delFavorite, initData, initFavorite } = data.actions
export const reducer = combineReducers({ data: data.reducer })
