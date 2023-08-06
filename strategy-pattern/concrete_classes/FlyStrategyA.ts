import IFlyStrategy from "../interfaces/IFlyStrategy";

export default class FlyStrategyA implements IFlyStrategy {
    fly(): void {
        console.log("Flying Strategy A");
    }
}