import "./DepartureSimulator.css";
import React, { useState } from 'react'
import airportService from "../Services/airportService";

function DepartureSimulator() {
    const [counter, setCounter] = useState(6);

    const handleIncrement = () => {
        setCounter(counter + 1);
        airportService.addDepartureTimeSimulator();
    }
    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            airportService.minusDepartureTimeSimulator();
        }

    }
    return (
        <>
            <div className="text">Generate departure</div>
            <div className="counter">
                <button className="counterBtn" onClick={handleDecrement}>-</button>
                <div>{counter}</div>
                <button className="counterBtn add" onClick={handleIncrement}>+</button>
            </div>
        </>
    )
}

export default DepartureSimulator
