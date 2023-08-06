import IEatStrategy from "./interfaces/IEatStrategy";
import IFlyStrategy from "./interfaces/IFlyStrategy";

export default class Duck {

    private flyStrategy: IFlyStrategy;
    private eatStrategy: IEatStrategy;

    constructor(flyStrategy: IFlyStrategy, eatStrategy: IEatStrategy) {

        this.flyStrategy = flyStrategy;
        this.eatStrategy = eatStrategy;
    }

    public fly(): void {
        this.flyStrategy.fly();
    }

    public eat(): void {
        this.eatStrategy.eat();
    }
}