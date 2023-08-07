import IObservable from "../interfaces/IObservable";
import IObserver from "../interfaces/IObserver";

export default class WeatherStation implements IObservable {

    private observers: IObserver[];
    private temperature: number;

    constructor() {
        this.observers = [];
        this.temperature = 35;
    }

    public add(observer: IObserver): void {

        this.observers.push(observer);
    }
    public remove(observer: IObserver): void {

    }

    public notify(): void {
        this.observers.forEach(observer => {
            observer.update();
        });
    }

    public getTemperature(): number {
        return this.temperature;
    }
}