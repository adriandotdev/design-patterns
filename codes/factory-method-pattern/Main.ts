import AsteroidGenerator from "./concrete-classes/ObstacleGenerator";

let asteroidGen = new AsteroidGenerator();

asteroidGen.setLevel(2);
console.log(asteroidGen.createObstacle())