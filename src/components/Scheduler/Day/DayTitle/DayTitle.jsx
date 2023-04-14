import { useState, useRef } from "react";
import { firefoxCssHasPolyfill } from "../../HelperFunction/checkFirefox.js";
import './DayTitle.css';

const DayTitle = ({dayName,date, isFirefox}) => {
    
    const [checked, setChecked] = useState(false);
    const chevronRef = useRef(); 
    const dateFormated = new Intl.DateTimeFormat('pl-PL').format(date).substring(0,5);

    return <div className="dayTitle">

                <span>
                    {dayName+", "+dateFormated}
                </span>
                <label  htmlFor={"expander"+dateFormated}
                        style={ {width: isFirefox?'0':'6.4px'} } >
                    <span 
                        id={date.toString().slice(0,15)} 
                        className="chevron"
                        ref={chevronRef}
                        onClick={isFirefox?()=>firefoxCssHasPolyfill(chevronRef.current):null}
                        style={ isFirefox?{
                            display: "inline-grid",
                            placeItems: "center",
                            width: "23px",
                        }:null }
                    >
                        {checked?"\u203A":"\u2039"}
                    </span> 
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