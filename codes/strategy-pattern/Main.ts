import Duck from "./Duck";
import FlyStrategyA from "./concrete_classes/FlyStrategyA";
import FlyStrategyB from "./concrete_classes/FlyStrategyB";
import EatStrategyA from "./concrete_classes/EatStrategyA";

let flyStrategyA = new FlyStrategyA();
let flyStrategyB = new FlyStrategyB();

let eatStrategyA = new EatStrategyA();

let duck = new Duck(flyStrategyA, eatStrategyA);

duck.fly();
duck.eat();