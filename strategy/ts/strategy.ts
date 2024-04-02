export interface Strategy {
    login(user: string, password: string): boolean;
}

export class LoginContext {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }

}

export class LoginDBStrategy implements Strategy {

    login(user: string, password: string): boolean {

        console.log('consultar a la bdd');

        if (user === "admin" && password === 'super') {
            return true;
        }

        return false;
    }

}

export class LoginGoogleStrategy implements Strategy {

    login(user: string, password: string): boolean {

        console.log('autenticacion google');

        if (user === "admin" && password === 'super') {
            return true;
        }

        return false;
    }

}

export class LoginServiceStrategy implements Strategy {

    login(user: string, password: string): boolean {

        console.log('consultar a un servicio');

        if (user === "admin" && password === 'super') {
            return true;
        }

        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy());

const resLoginBdd = auth.login("admin", "ssuper");

console.log(resLoginBdd);

auth.setStrategy(new LoginServiceStrategy());

const resLoginService = auth.login("admin", "super");

console.log(resLoginService);

auth.setStrategy(new LoginGoogleStrategy());

const resGoogle = auth.login("admin", "ssuper");

console.log(resGoogle);
