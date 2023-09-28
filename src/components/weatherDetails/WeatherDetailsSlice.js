import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from '../citysPanel/CitysPanelSlice';

const initialState = {
    currentTemp: null,
    currentFeelsLike: null,
    sunrise: null,
    sunset: null,
    img: null,
    imgDescr: null,
    humidity: null,
    windSpeed: null,
    pressure: null,
    uv: null,
    weatherDetailsLoadingStatus: 'idle'
}

const WeatherDetailsSlice = createSlice({
    name: 'weatherDetails',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, state => {state.weatherDetailsLoadingStatus = 'loading'})
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.weatherDetailsLoadingStatus = 'idle'
                state.currentTemp = Math.round(action.payload.current.temp_c)
                state.currentFeelsLike = Math.round(action.payload.current.feelslike_c)
                state.sunrise = action.payload.forecast.forecastday[0].astro.sunrise
                state.sunset = action.payload.forecast.forecastday[0].astro.sunset
                state.img = action.payload.current.condition.icon
                state.imgDescr = action.payload.current.condition.text
                state.humidity = action.payload.current.humidity
                state.windSpeed = action.payload.current.wind_kph
                state.pressure = action.payload.current.pressure_mb
                state.uv = action.payload.current.uv

            })
            .addCase(fetchWeatherData.rejected, state => {state.weatherDetailsLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = WeatherDetailsSlice;

export default reducer;

// eslint-disable-next-line
export const {} = actions;