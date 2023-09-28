import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import './location.scss';

const Location = () => {
    const { city, time, date, locationLoadingStatus } = useSelector(state => state.location);

    if (locationLoadingStatus === 'loading') {
        return (
            <div className="location">
                <h2 className='loading'>Loading...</h2>
            </div>
        )
    } else if (locationLoadingStatus === 'error') {
        return (
            <div className="location">
                <h2 className='error'>Error</h2>
            </div>
        )
    }

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = format(date, 'EEEE, dd MMM');
        return formattedDate;
    };

    return(
        <div className="location">
            <div className="location__city">{city}</div>
            <div className="location__time">{time}</div>
            <div className="location__date">{formatDate(date)}</div>
        </div>
    )
};

export default Location;