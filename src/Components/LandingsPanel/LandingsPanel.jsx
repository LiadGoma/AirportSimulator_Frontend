import "./LandingsPanel.css";
import React from 'react'
import Process from "../Process/Process";

function LandingsPanel({ landings }) {
    return (
        <div className="LandingsPanel">
            <h3>
                Landings
            </h3>
            <div>
                {landings && landings.map((land) => {
                
                    return <Process operation={land} isLanding={true} />
                })}
            </div>
        </div>
    )
}

export default LandingsPanel
