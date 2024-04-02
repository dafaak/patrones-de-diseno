interface IObserver<T> {
    refresh(value: T): void;
}

interface ISubject<T> {

    observers: IObserver<T>[];

    subscribe(observer: IObserver<T>): void;

    unsubscribe(observer: IObserver<T>): void;

    notify(value: T): void;
}


class Subject<T> implements ISubject<T> {
    observers: IObserver<T>[];

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<T>) {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T) {
        this.observers.forEach(obs => obs.refresh(value));
    }
}

class Observer<T> implements IObserver<T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}


const subject = new Subject<number>();
const obs1 = new Observer<number>((n) => {
    console.log('Obs1: ' + n);
});
subject.subscribe(obs1);
subject.notify(1.2);

const obs2 = new Observer<number>((n) => {
    console.log('Obs2: ' + n);
});

subject.subscribe(obs2);



setTimeout(() => {
    subject.notify(2);
}, 5);

