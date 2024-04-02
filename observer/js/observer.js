class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs != observer)
    }

    notify(data) {
        this.observers.forEach(obs => obs.update(data))
    }

}


class Observer {
    constructor(fn) {
        this.fn = fn;
    }

    update(data) {
        this.fn(data);
    }
}

const subject = new Subject();

const obs1 = new Observer(d => console.log('Obs 1: ' + d));

const obs2 = new Observer(d => {
    div1.innerHTML = d;
});

const obs3 = new Observer(d => {
    div2.innerHTML = d.split('').reverse().join('');
});

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.subscribe(obs3);

function change() {
    subject.notify(myText.value);
}

