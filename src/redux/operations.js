import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../api/fetchData";

export const fetchDatas = createAsyncThunk(
        'phonebook/fetchData',
    async (page, thunkAPI) => {
            try {
                const response = await fetchData(page);
                return response.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
      
        }
    )

export const refresh = createAsyncThunk(
        'phonebook/fetchData',
    async (_, thunkAPI) => {
            try {
                const response = await fetchData();
                return response.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
      
        }
    )