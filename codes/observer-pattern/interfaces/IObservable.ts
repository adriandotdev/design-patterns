import IObserver from './IObserver.js';

export default interface IObservable {
    add(observer: IObserver): void,
    remove(observer: IObserver): void,
    notify(): void
}