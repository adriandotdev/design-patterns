import IObstacle from "../interfaces/IObstacle";

export default class IceAsteroid implements IObstacle {

    speed: number;
    size: number;
    image: string;
    damage: number;
    startXPosition: number;
    startYPosition: number;

    constructor(speed: number, size: number, damage: number) {
        this.speed = speed;
        this.size = size;
        this.damage = damage;
        this.image = 'IceAsteroid.png';
        this.startXPosition = Math.random() * 10;
        this.startYPosition = Math.random() * 10;
    }

    move(): void {
        console.log(`Moving from X ${this.startXPosition} and Y ${this.startYPosition}`)
    }
}