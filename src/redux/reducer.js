import { combineReducers, createSlice } from '@reduxjs/toolkit'
import { fetchDatas } from './operations'

export const data = createSlice({
  name: 'counter',
    initialState: {
        value: 1,
        isLoading: false,
        error: null,
        data: [],
        filteres: [],
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
      initValue: (state) => {
        state.value = 1
              
    },
      initData: (state) => {
        state.data = []  
    },
      initFavorite: (state) => {
          state.favorite = []      
    },
      initFilter: (state) => {
          state.filteres = []    
    },
      setDataModal: (state, action) => {
        state.dataModal = { ...action.payload };
        
    },
      setFavorite: (state, action) => {
        state.favorite.push(action.payload)
    },
      delFavorite: (state, action) => {
        state.favorite = [...state.favorite.filter((el)=>el!==action.payload)]
    },
      setFilterMenu: (state, action) => {
          state.filteres = [...state.filteres, action.payload]    
    },
      delFilterMenu: (state) => {
          state.filteres = [...state.filteres.filter((el) => !el.make)]     
    },
      setFilterPrice: (state, action) => {
          state.filteres = [...state.filteres, action.payload]    
    },
      delFilterPrice: (state) => {
          state.filteres = [...state.filteres.filter((elem) => !elem.rentalPrice)]     
    }  
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDatas.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchDatas.fulfilled, (state, action) => {
                state.data=[...state.data,...action.payload];
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchDatas.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { increment,
    decrement,
    initValue,
    setDataModal,
    setFavorite,
    delFavorite,
    initData,
    initFavorite,
    initFilter,
    setFilterMenu,
    delFilterMenu,
    setFilterPrice,
    delFilterPrice
} = data.actions
export const reducer = combineReducers({ data: data.reducer })
