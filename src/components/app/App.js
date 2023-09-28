import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData} from '../citysPanel/CitysPanelSlice';


import CitysPanel from "../citysPanel/CitysPanel";
import Location from "../location/Location";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import DaysForecast from "../daysForecast/DaysForecast";
import HourlyForecast from "../hourlyForecast/HourlyForecast";

import './app.scss';

const App = () => {
    const { city } =useSelector(state => state.citysPanel)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherData(city));
        
        // eslint-disable-next-line
    }, [city]);


    return(
        <div className="container">
            <header className="header">
                <CitysPanel/>
            </header>
            <main>
                <div className="first__row">
                    <Location/>
                    <WeatherDetails/>
                </div>
                <div className="second__row">
                    <DaysForecast/>
                    <HourlyForecast/>
                </div>
            </main>
        </div>
    )
};

export default App;