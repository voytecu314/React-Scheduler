import './Day.css';
import DayTitle from './DayTitle/DayTitle';
import HoursAvailable from './HoursAvailable/HoursAvailable';
import { checkIfFirefox } from './HelperFunction/checkFirefox.js';

const Day = ({dayName, date, times}) => {

    checkIfFirefox();

    return <div className="day"> 
                <DayTitle dayName={dayName} date={date}/>
                <HoursAvailable times={times} />
            </div>
}

export default Day;