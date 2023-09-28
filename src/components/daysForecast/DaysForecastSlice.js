import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from '../citysPanel/CitysPanelSlice';

const initialState = {
    daysForecast: [],
    daysForecastLoadingStatus: 'idle'
}

const DaysForecastSlice = createSlice({
    name: 'daysForecast',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, state => {state.daysForecastLoadingStatus = 'loading'})
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.daysForecastLoadingStatus = 'idle';
                state.daysForecast = action.payload.forecast.forecastday;
            })
            .addCase(fetchWeatherData.rejected, state => {state.daysForecastLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = DaysForecastSlice;

export default reducer;

// eslint-disable-next-line
export const {} = actions;