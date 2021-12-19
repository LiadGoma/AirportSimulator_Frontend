import "./Airport.css";
import React, { useEffect, useState } from 'react'
import airportService from "../../Services/airportService";
import Station from "../Station/Station";
import { HubConnectionBuilder } from "@microsoft/signalr";
import LandingsPanel from "../LandingsPanel/LandingsPanel";
import DeparturePanel from "../DeparturePanel/DeparturePanel";
import LandingSimulator from "../LandingSimulator/LandingSimulator";
import DepartureSimulator from "../../DepartureSimulator/DepartureSimulator";
function Airport() {
    const [stations, setStations] = useState([]);
    const [landings, setLandings] = useState([]);
    const [airportState, setAirportState] = useState(null);
    const [departures, setDepartures] = useState([]);
    const [connection, setConnection] = useState(null);
    // useState(() => {
    //     connection = new HubConnectionBuilder().withUrl("https://localhost:44320/movement").build();
    // })
    useState(() => {
        setConnection(new HubConnectionBuilder().withUrl("https://localhost:44320/movement").build());
    }, [connection])


    const handleStartBtn = async () => {
        const { data } = await airportService.getStations();
        setStations(data);
        const { data: landingsData } = await airportService.getLandings();
        setLandings(landingsData);
        const { data: departuresData } = await airportService.getDepartures();
        setDepartures(departuresData);
        setAirportState(true);
        await connection.start();
        connection?.on("SendMovement", (newStations) => {
            setStations([]);
            setStations(newStations);
        })
        connection?.on("SendLandings", (newLandings) => {
            setLandings([]);
            setLandings(newLandings);
        })
        connection?.on("SendDepartures", (newDepartures) => {
            console.log("coedlsdlkmds");
            console.log(newDepartures);
            setDepartures([]);
            setDepartures(newDepartures);
        })
    }

    const handleStopBtn = async () => {
        await airportService.stopProcess();
        setAirportState(false);
    }
    const handleContinueBtn = async () => {
        await airportService.continueProcess();
        setAirportState(true);

    }

    return (
        <div className="page">
            <div className="LandingsPanel">
                <LandingsPanel landings={landings} />
            </div>
            <div className="airportPanel">
                <div className="btnRow">
                    {airportState === null && <button className="btn" onClick={handleStartBtn}>Start</button>}
                    {airportState === true && <button className="btn stopBtn" onClick={handleStopBtn}>Stop</button>}
                    {airportState === false && <button className="btn continueBtn" onClick={handleContinueBtn}>Continue</button>}

                </div>
                <div className="AirportView">
                    <div className="landingRoute">
                        {stations && stations.map((station) => {
                            if (station.id < 5)
                                return <Station station={station} airplane={station.airplaneStation} />
                        })}
                    </div>
                    <div className="DriveWays">
                        {stations && stations.map((station) => {
                            if (station.id === 5 || station.id === 8)
                                return <Station station={station} airplane={station.airplaneStation} />
                        })}
                    </div>
                    <div className="Parking">
                        {stations && stations.map((station) => {
                            if (station.id > 5 && station.id < 8)
                                return <Station station={station} airplane={station.airplaneStation} />
                        })}
                    </div>
                </div>
                <div className="simulatorSettings">
                    <LandingSimulator/>
                    <DepartureSimulator/>
                </div>
            </div>
            <div className="departurePanel">
                <DeparturePanel departures={departures} />
            </div>

        </div >
    )
}

export default Airport
