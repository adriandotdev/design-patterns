import IFlyStrategy from "../interfaces/IFlyStrategy";

export default class FlyStrategyB implements IFlyStrategy {
    fly(): void {
        console.log("Fly Strategy B");
    }
}