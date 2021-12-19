import "./DeparturePanel.css";
import React from 'react'
import Process from "../Process/Process";

function DeparturePanel({departures}) {
    return (
        <div className="DeparturePanel">
            <h3>
                Departures
            </h3>
            <div>
                {departures && departures.map((departure) => {
                   
                    return <Process operation={departure} isLanding={false}/>
                })}
            </div>
        </div>
    )
}

export default DeparturePanel
