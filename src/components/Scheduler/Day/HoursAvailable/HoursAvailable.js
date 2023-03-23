import './HoursAvailable.css'

const HoursAvailable = ({times}) => {
    return <div className="hours-container">
                {times.map(hour=><span className="hour">{hour+":00"}</span>)}
            </div>
}

export default HoursAvailable;