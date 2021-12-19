import "./Station.css"
import React from 'react'
import Airplane from "../Airplane/Airplane"

function Station({ station ,airplane}) {
    return (
        <div className={`station ${station.id === 4 ? "runway" : ""}`}>
            {station.id}
            {station.airplaneId > 0 ? <Airplane id={station.airplaneId} airplane={airplane} /> : ""}
        </div>
    )
}

export default Station
