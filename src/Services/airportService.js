import axios from "axios";
const uri = "https://localhost:44320/api/airport/start"
export async function getStations() {
    return await axios.get(uri);
}
export async function getLandings() {
    return await axios.get("https://localhost:44320/api/airport/GetLandings");
}
export async function getDepartures() {
    return await axios.get("https://localhost:44320/api/airport/GetDepartures");
}
export async function stopProcess() {
    return await axios.get("https://localhost:44320/api/airport/Stop");
}
export async function continueProcess() {
    return await axios.get("https://localhost:44320/api/airport/Continue");
}
export async function addLandingTimeSimulator() {
    return await axios.post("https://localhost:44320/api/airport/SetLandingSimulatorAdd"); 
}
export async function minusLandingTimeSimulator() {
    return await axios.post("https://localhost:44320/api/airport/SetLandingSimulatorMinus"); 
}
export async function addDepartureTimeSimulator() {
    return await axios.post("https://localhost:44320/api/airport/SetDepartureSimulatorAdd");
}
export async function minusDepartureTimeSimulator() {
    return await axios.post("https://localhost:44320/api/airport/SetdepartureSimulatorMinus");
}


export default {
    getStations,
    getLandings,
    getDepartures,
    stopProcess,
    continueProcess,
    addDepartureTimeSimulator,
    addLandingTimeSimulator,
    minusDepartureTimeSimulator,
    minusLandingTimeSimulator
}