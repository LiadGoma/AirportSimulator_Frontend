import "./Airplane.css";
import React from 'react'
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
function Airplane({ id, airplane }) {
    return (
        <div>
            {id}     
            {airplane.isLanding===true && <GiAirplaneArrival className={"airplane "} />}
            {airplane.isLanding===false && <GiAirplaneDeparture className={"airplane"} />}

        </div>
    )
}

export default Airplane
