import "./LandingSimulator.css";
import React, { useState } from 'react'
import airportService from "../../Services/airportService";

function LandingSimulator() {
    const [counter, setCounter] = useState(8);

    const handleIncrement = () => {
        setCounter(counter + 1);
        airportService.addLandingTimeSimulator();
    }
    const handleDecrement = () => {
        if(counter>1)
        {
            setCounter(counter - 1);
            airportService.minusLandingTimeSimulator();
        }
       
    }
    return (
        <>
        <div className="text">Generate landing</div>
        <div className="counter">
            <button className="counterBtn" onClick={handleDecrement}>-</button>
            <div>{counter}</div>
            <button className="counterBtn add" onClick={handleIncrement}>+</button>
        </div>
        </>
    )
}

export default LandingSimulator
