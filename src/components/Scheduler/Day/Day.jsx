import './Day.css';
import DayTitle from './DayTitle/DayTitle';
import HoursAvailable from './HoursAvailable/HoursAvailable';
const Day = ({dayName, date, times, isFirefox}) => {

    return <div className="day"> 
                <DayTitle dayName={dayName} date={date} isFirefox={isFirefox}/>
                <HoursAvailable times={times} />
            </div>
}

export default Day;