import { useSelector } from 'react-redux';

import sunriseImg from '../../resources/icons/WeatherDetails/sunrise.svg'
import sunsetImg from '../../resources/icons/WeatherDetails/sunset.svg'
import humidityImg from '../../resources/icons/WeatherDetails/humidity.svg'
import pressureImg from '../../resources/icons/WeatherDetails/pressure.svg'
import windImg from '../../resources/icons/WeatherDetails/wind.svg'
import uvImg from '../../resources/icons/WeatherDetails/uv.png'

import './weatherDetails.scss';

const WeatherDetails = () => {
    const { currentTemp, 
            currentFeelsLike, 
            sunrise, 
            sunset, 
            img, 
            imgDescr, 
            humidity, 
            windSpeed, 
            pressure, 
            uv,
            weatherDetailsLoadingStatus } = useSelector(state => state.weatherDetails);

    if (weatherDetailsLoadingStatus === 'loading') {
        return (
            <div className="details">
                <h2 className='loading'>Loading...</h2>
            </div>
        )
    } else if (weatherDetailsLoadingStatus === 'error') {
        return (
            <div className="details">
                <h2 className='error'>Error</h2>
            </div>
        )
    }

    return(
        <div className="details">
            <div className="details__wrapper">
                <div className="details__main">
                    <div className="temp">{currentTemp}°C</div>
                    <div className="temp__feels">Feels like: {currentFeelsLike}°C</div>

                    <div className="sun">
                        <img src={sunriseImg} alt="" className='sun__img'/>
                        <div className="sun__wrapper">
                            <div className="sun__text">Sunrise</div>
                            <div className="sun__text">{sunrise}</div>
                        </div>
                    </div>
                    <div className="sun">
                        <img src={sunsetImg} alt="" className='sun__img'/>
                        <div className="sun__wrapper">
                            <div className="sun__text">Sunset</div>
                            <div className="sun__text">{sunset}</div>
                        </div>
                    </div>
                </div>

                <div className="img">
                    <img src={img} alt={imgDescr}/>
                    <div className="img__text">{imgDescr}</div>
                </div>

                <div className="extra">
                    <div className="extra__wrapper">
                        <div className="extra__item">
                            <img src={humidityImg} alt="humidity" className='extra__img'/>
                            <div className="extra__info">{humidity}%</div>
                            <div className="extra__text">Humidity</div>
                        </div>
                        <div className="extra__item">
                            <img src={windImg} alt="wind speed" className='extra__img'/>
                            <div className="extra__info">{windSpeed}km/h</div>
                            <div className="extra__text">Wind Speed</div>
                        </div>
                        <div className="extra__item">
                            <img src={pressureImg} alt="pressure" className='extra__img'/>
                            <div className="extra__info">{pressure}hPa</div>
                            <div className="extra__text">Pressure</div>
                        </div>
                        <div className="extra__item">
                            <img src={uvImg} alt="uv" className='extra__img'/>
                            <div className="extra__info">{uv}</div>
                            <div className="extra__text">UV</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WeatherDetails;