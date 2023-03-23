import MyContext from "../../context/MyContext";
import { useContext } from "react";
import Day from "./Day/Day";
import './Scheduler.css'

const Scheduler = () => {

    const {days:{dates}} = useContext(MyContext);

    return (<div className="scheduler">
                {dates.map(day=><Day key={day.date} dayName={day.weekDay} date={day.date} times={day.times}/>)} 
            </div>)
}

export default Scheduler;