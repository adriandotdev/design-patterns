import IObstacle from '../interfaces/IObstacle';
import IObstacleGenerator from '../interfaces/IObstacleGenerator';
import Asteroid from './Asteroid';
import FireAsteroid from './FireAsteroid';
import IceAsteroid from './IceAsteroid';

export default class AsteroidGenerator implements IObstacleGenerator {

    private level: number;

    constructor() {
        this.level = 1;
    }

    public setLevel(level: number) {
        this.level = level;
    }

    public createRandomObstacle(): IObstacle {

        let speed = Math.random() * (this.level + 12);
        let damage = Math.random() * (this.level * 5);
        let randomAsteroid = Math.random() * 10;

        if (randomAsteroid >= 1 && randomAsteroid <= 3) {

            return new Asteroid(speed, 10, damage);
        }
        else if (randomAsteroid >= 4 && randomAsteroid <= 7) {

            damage = Math.random() * (this.level * 7);

            return new FireAsteroid(speed, 20, damage);
        }
        else if (randomAsteroid >= 8 && randomAsteroid <= 10) {

            damage = Math.random() * (this.level * 10);

            return new IceAsteroid(speed, 20, damage);
        }

        return new Asteroid(speed, 10, damage);
    }
}