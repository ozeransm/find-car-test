import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../api/fetchData";

export const fetchDatas = createAsyncThunk(
        'phonebook/fetchData',
    async(param={}, thunkAPI) => {
       
            try {
                const response = await fetchData(param);
                return response.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
      
        }
    )
