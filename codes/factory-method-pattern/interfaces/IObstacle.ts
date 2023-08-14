export default interface IObstacle {

    speed: number,
    size: number,
    image: string,
    startXPosition: number,
    startYPosition: number,
    damage: number,
    move(): void
}