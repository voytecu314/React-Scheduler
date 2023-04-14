import { useState } from "react";
import './DayTitle.css';

const DayTitle = ({dayName,date}) => {
    
    const [checked, setChecked] = useState(false);

    const dateFormated = new Intl.DateTimeFormat('pl-PL').format(date).substring(0,5);

    return <div className="dayTitle">

                <span>
                    {dayName+", "+dateFormated}
                </span>
                <label htmlFor={"expander"+dateFormated}>
                    <span className="chevron">{checked?"\u203A":"\u2039"}</span> 
                    <input 
                        onChange={()=>setChecked(!checked)}
                        type="checkbox" 
                        id={"expander"+dateFormated} 
                        className="expander"
                    />
                </label>
                
            </div>
}

export default DayTitle;