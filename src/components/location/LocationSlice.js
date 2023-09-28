import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from '../citysPanel/CitysPanelSlice';

const initialState = {
    city: null,
    time: null,
    date: null,
    locationLoadingStatus: 'idle'
}

const Location = createSlice({
    name: 'location',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, state => {state.locationLoadingStatus = 'loading'})
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.locationLoadingStatus = 'idle'
                state.city = action.payload.location.name
                state.time = action.payload.location.localtime.split(' ')[1]
                state.date = action.payload.location.localtime
            })
            .addCase(fetchWeatherData.rejected, state => {state.locationLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = Location;

export default reducer;

// eslint-disable-next-line
export const {} = actions;