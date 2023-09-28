import { useSelector } from 'react-redux';

import './hourlyForecast.scss';

const HourlyForecast = () => {
    const { hoursForecast, hourlyForecastLoadingStatus } = useSelector(state => state.hourlyForecast);

    function renderItems(arr) {
        return arr.map((i, index) => (
            <div className="hourlyForecast__item" key={index}>
                <div className="hourlyForecast__item-time">{i.time.split(' ')[1]}</div>
                <img src={i.image_url} alt="" className="hourlyForecast__item-img"/>
                <div className="hourlyForecast__item-info">{i.temp_c}°C</div>
                <div className="hourlyForecast__item-info">Wind Dir: <br /> {i.wind_dir}</div>
                <div className="hourlyForecast__item-info">{i.wind_kph}km/h</div>
            </div>
        ));
    }

    if (hourlyForecastLoadingStatus === 'loading') {
        return (
            <div className="hourlyForecast">
                <h2 className='loading'>Loading...</h2>
            </div>
        )
    } else if (hourlyForecastLoadingStatus === 'error') {
        return (
            <div className="hourlyForecast">
                <h2 className='error'>Error</h2>
            </div>
        )
    }

    return(
        <div className="hourlyForecast">
            <h2 className="hourlyForecast__title">Hourly Forecast:</h2>
            <div className="hourlyForecast__wrapper">
                {renderItems(hoursForecast)}
            </div>
        </div>
    )
};

export default HourlyForecast;