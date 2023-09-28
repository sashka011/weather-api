import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import './daysForecast.scss'

const DaysForecast = () => {
    const { daysForecast, daysForecastLoadingStatus } = useSelector(state => state.daysForecast);

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = format(date, 'EEEE, dd MMM');
        return formattedDate;
    };

    function renderItems(arr) {
        return arr.map((i, index) => (
            <div className="daysForecast__item" key={index}>
                <img src={i.day.condition.icon} alt="" className='daysForecast__item-img' />
                <div className="daysForecast__item-temp">{Math.round(i.day.maxtemp_c)}°C</div>
                <div className="daysForecast__item-date">{formatDate(i.date)}</div>
            </div>
        ));
    }

    if (daysForecastLoadingStatus === 'loading') {
        return (
            <div className="daysForecast">
                <h2 className='loading'>Loading...</h2>
            </div>
        )
    } else if (daysForecastLoadingStatus === 'error') {
        return (
            <div className="daysForecast">
                <h2 className='error'>Error</h2>
            </div>
        )
    }

    return (
        <div className="daysForecast">
            <h2 className="daysForecast__title">5 Days Forecast:</h2>
            {renderItems(daysForecast)}
        </div>
    );
};

export default DaysForecast;
