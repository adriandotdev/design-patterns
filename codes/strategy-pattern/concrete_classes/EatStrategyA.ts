import IEatStrategy from "../interfaces/IEatStrategy";

export default class EatStrategyA implements IEatStrategy {
    eat(): void {
        console.log("Eat Strategy A");
    }
}