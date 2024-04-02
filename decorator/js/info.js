class ClientComponent {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data.slice(0,10);
    }
}

// decorator

class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getData() {
        return await this.clientComponent.getData();
    }
}

// decorator 1

class UpperCaseClientDecorator extends ClientDecorator {

    constructor(clientComponent) {
        super(clientComponent);
    }

    async getData() {
        const data = await super.getData();
        const newData = data.map(item => {
            item.title = item.title.toUpperCase();
            return item;
        });
        return newData;
    }
}

// decorator 2

class HTMLClientDecorator extends ClientDecorator {
    constructor(clientComponent) {
        super(clientComponent);
    }

    async getData() {
        const data = await super.getData();
        const newData = data.map(item => {
            item.title = `<h1>${item.title}</h1>    `
            item.thumbnailUrl = `<img src='${item.thumbnailUrl}'>`
            return item;
        });
        return newData;
    }

}

(async () => {
    console.log('ejecutando');
    const url = "https://jsonplaceholder.typicode.com/photos";
    const client = new ClientComponent(url);
    const data = await client.getData();
    console.log(data);



    const upperClient = new UpperCaseClientDecorator(client);
    const data2 = await upperClient.getData()
    console.log(data2);

    const htmlClient = new HTMLClientDecorator(upperClient);
    const data3 = await htmlClient.getData();
    divContent1.innerHTML = data3.reduce((acc, item) => {
        return acc + item.title + item.thumbnailUrl;
    }, "")
     // divContent2.innerHTML = data3[0].thumbnailUrl;
    const htmlClient2 = new HTMLClientDecorator(client);
    const data4 = await htmlClient2.getData();
    divContent2.innerHTML = data4.reduce((acc, item) => {
        return acc + item.title + item.thumbnailUrl;
    }, "")

})();