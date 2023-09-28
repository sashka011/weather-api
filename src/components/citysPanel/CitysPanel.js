import { useDispatch } from 'react-redux';
import { changeCity } from './CitysPanelSlice';

import './citysPanel.scss';

const CitysPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="citysPanel">
            <button onClick={() => dispatch(changeCity('Kyiv'))}>Kyiv</button>
            <button onClick={() => dispatch(changeCity('London'))}>London</button>
            <button onClick={() => dispatch(changeCity('Lisbon'))}>Lisbon</button>
            <button onClick={() => dispatch(changeCity('Berlin'))}>Berlin</button>
            <button onClick={() => dispatch(changeCity('Paris'))}>Paris</button>            
        </div>
    )
}

export default CitysPanel;
