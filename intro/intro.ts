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