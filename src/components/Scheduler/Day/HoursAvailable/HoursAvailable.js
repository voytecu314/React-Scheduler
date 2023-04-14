import './HoursAvailable.css'

const HoursAvailable = ({times}) => {
    return <div className="hours-container">
                {times.map(hour=><span key={hour} className="hour">{hour+":00"}</span>)}
            </div>
}

export default HoursAvailable;