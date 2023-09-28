import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    city: 'Kyiv'
}

export const fetchWeatherData = createAsyncThunk(
    'cityPanel/fetchWeatherData',
    async (city) => {
        const { request } = useHttp();
        const response = await request(`https://api.weatherapi.com/v1/forecast.json?key=47e335ed123e48e5876185402232609&q=${city}&days=5&aqi=no&alerts=no`);
        return response;
    }
); 

const CitysPanelSlice = createSlice({
    name: 'cityPanel',
    initialState,
    reducers: {
        changeCity: (state, action) => {
            state.city = action.payload;
        }
    }
});

const {actions, reducer} = CitysPanelSlice;

export default reducer;

export const { changeCity } = actions;
