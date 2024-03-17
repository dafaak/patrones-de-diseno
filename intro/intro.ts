// FUNCIONES DE PRIMER ORDEN Y ORDEN SUPERIOR


// FUNCIONES DE PRIMER ORDEN
//  son funcioines que pueden ser tratadas como una variable,
//  esta variable puede guardar una funcion,
//  puede ejecutar la funcion,
//  y puede ser enviada como parametro a otras funciones

function suma(num1: number, num2: number) {
    return num1 + num2;
}

let res = suma(1, 2);
console.log(res);


const fSuma = suma;

res = fSuma(2, 3);
console.log(res);


// FUNCIONES DE ORDEN SUPERIOR
// Toda funcion que puede recibir como parametro funciones

function operation(fn: Function, a: number, b: number) {
    return fn(a, b)
}

res = operation(suma, 3, 4)

console.log(res);

// FUNCIONES FLECHA (ARROW)

let division = (num1: number, num2: number) => num1 / num2;

res = operation(division, 8, 2);

console.log(res);

res = operation((num1: number, num2: number) => num1 * num2, 4, 2);

console.log(res);


class Drink {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return this.name;
    }
}

const drink = new Drink('Tesalia');

console.log(drink.info());

interface Product {
    price: number;

    getPrice(): string;
}


class Beer extends Drink implements Product {
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    getPrice(): string {
        return "$" + this.price
    }

    info(): string {
        return super.info() + " " + this.alcohol
    }

}

const beer = new Beer('Budweiser', 7, 2);

console.log(beer.info());

class Snack implements Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return "El precio es $" + this.price;
    }
}

const snack = new Snack('Ruffles', 1);

console.log(snack.getPrice());

const products: Product[] = [];

products.push(beer);
products.push(snack);
