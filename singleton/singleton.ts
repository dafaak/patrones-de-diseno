// SINGLETON
// Busca tener una solo instancia de una clase

class Singleton {
    private static instance: Singleton;
    public random: number;

    private constructor() {
        this.random = Math.random()
    }

    static getInstance(): Singleton {

        if (!this.instance) {
            this.instance = new Singleton();

        }

        return this.instance;
    }
}

const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
const singleton3 = Singleton.getInstance();

console.log(singleton.random);
console.log(singleton2.random);
singleton.random = 10;
console.log(singleton3.random);

