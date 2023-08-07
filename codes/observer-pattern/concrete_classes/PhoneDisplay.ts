import IObserver from "../interfaces/IObserver";
import WeatherStation from "./WeatherStation";

export default class PhoneDisplay implements IObserver {

    private observable: WeatherStation;
    private static testNumber: number = 1;

    constructor(observable: WeatherStation) {

        this.observable = observable;
    }

    update(): void {
        console.log(`PHONE DISPLAY: ${PhoneDisplay.testNumber++} \n TEMPERATURE: ${this.observable.getTemperature()}`);
    }
}