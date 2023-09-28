import { configureStore } from '@reduxjs/toolkit';

import location from '../components/location/LocationSlice';
import daysForecast from '../components/daysForecast/DaysForecastSlice';
import citysPanel from '../components/citysPanel/CitysPanelSlice';
import weatherDetails from '../components/weatherDetails/WeatherDetailsSlice';
import hourlyForecast from '../components/hourlyForecast/HourlyForecastSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {citysPanel, 
              daysForecast, 
              location, 
              weatherDetails, 
              hourlyForecast},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;