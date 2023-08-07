import IObserver from "../interfaces/IObserver";
import WeatherStation from "./WeatherStation";

export default class WebDisplay implements IObserver {

    private weatherStation: WeatherStation;
    private static testNumber: number = 1;

    constructor(weatherStation: WeatherStation) {

        this.weatherStation = weatherStation;
    }

    update(): void {
        console.log(`WEB DISPLAY: ${WebDisplay.testNumber++} \n TEMPERATURE: ${this.weatherStation.getTemperature()}`);
    }
}