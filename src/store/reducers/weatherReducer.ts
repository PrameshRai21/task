import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import persist from '@Store/persist';

export interface WeatherInterface{
    data: any | null ;
    loading: boolean;
    error: null | string;
}

const initialState: WeatherInterface = {
    data: null,
    loading: false,
    error: null
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchApiRequest: (state, action: PayloadAction<string>) => {
            state.loading = true;
            state.error = null;
        },
        fetchApiSuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchApiFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {fetchApiFailure, fetchApiRequest, fetchApiSuccess} = weatherSlice.actions;
export default persist('weather', [], weatherSlice.reducer);