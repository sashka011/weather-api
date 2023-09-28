import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from '../citysPanel/CitysPanelSlice';

const initialState = {
    hoursForecast: [],
    currentTime: null,
    hourlyForecastLoadingStatus: 'idle'
}

const HourlyForecastSlice = createSlice({
    name: 'hourlyForecast',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, state => {state.hourlyForecastLoadingStatus = 'loading'})
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.hourlyForecastLoadingStatus = 'idle';
                state.currentTime = action.payload.location.localtime.split(" ")[1].split(":")[0];
            
                const currentHourIndex = parseInt(state.currentTime, 10);
            
                state.hoursForecast = [];
            
                for (let i = currentHourIndex + 1; i <= currentHourIndex + 5; i++) {
                    const hourIndex = i % 24;
            
                    const hourData = action.payload.forecast.forecastday[0].hour[hourIndex];
            
                    const imageUrl = hourData.condition.icon;
            
                    state.hoursForecast.push({
                        time: hourData.time,
                        temp_c: Math.round(hourData.temp_c),
                        wind_kph: Math.round(hourData.wind_kph),
                        wind_dir: hourData.wind_dir,
                        image_url: imageUrl,
                    });
                }
            })            
            .addCase(fetchWeatherData.rejected, state => {state.hourlyForecastLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = HourlyForecastSlice;

export default reducer;

// eslint-disable-next-line
export const {} = actions;