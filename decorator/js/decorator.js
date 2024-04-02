// component
class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`;
    }

}

// decorator 1
class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {

    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}

// decorator 2

class StoreProductDecorator extends ProductDecorator {

    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetail() {
        return super.getDetail() + ` $${this.price}`;
    }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {

    getDetail() {
        return `<h1>Información del producto</h1>
<p>${super.getDetail()}</p>
`
    }
}

// Ejecución
// component

const productComponent = new ProductComponent('Beer');

// decorator 1 con somponent

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "Asahi Ligth", "Asahi");
console.log(commercialInfoProduct.getDetail());

// decorator 2 con somponent
const storeProduct = new StoreProductDecorator(productComponent, 5.25);
console.log(storeProduct.getDetail());

// decorator 2 con decorador 1
const product = new StoreProductDecorator(commercialInfoProduct, 1.25);
console.log(product.getDetail());

// decorator 3
const htmlProduct = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProduct.getDetail();
