import IObstacle from './IObstacle';
export default interface IFactory {

    createRandomObstacle(): IObstacle
}