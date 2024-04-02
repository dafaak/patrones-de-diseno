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


class ItemSubject extends Subject {

    constructor() {
        super();

        this.data = [];
    }

    add(item) {
        this.data.push(item);
        this.notify(this.data)
    }


}

class HtmlElementObserver {
    constructor(element) {
        this.element = element;
    }

    update(data) {
        this.element.innerHTML = data.reduce((acc, e) => {
            return acc + `<p> ${e} </p>`
        })
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

const itemsSubject = new ItemSubject();

const div1Obs = new HtmlElementObserver(div1);
itemsSubject.subscribe(div1Obs);

const div2Obs = new HtmlElementObserver(div2);
itemsSubject.subscribe(div2Obs);

const div3Obs = new Observer((data) => {
    div3.innerHTML = data.length;
});

itemsSubject.subscribe(div3Obs);


function add() {
    const name = txtName.value;
    itemsSubject.add(name);
}