import "./Process.css";
import React from 'react'
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
function Process({ operation, isLanding }) {
    return (
        <div className="landing">
            {isLanding ? <GiAirplaneArrival className="img" /> : <GiAirplaneDeparture className="img" />}
            {`Plane ${operation.planeId} - ${operation.endingTime.substring(0, 19)}`}
        </div>
    )
}

export default Process
