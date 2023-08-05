class Guitar{
    constructor(serialNumber, price, builder, model, type, backwood, topwood) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backwood = backwood;
        this.topwood = topwood;
    }

    getserialNumber() {
        return this.serialNumber;
    }
    getprice() {
        return this.price;
    }
    getbuilder() {
        return this.builder;
    }
    getmodel() {
        return this.model;
    }
    gettype() {
        return this.type;
    }
    getbackwood() {
        return this.backwood;
    }
    gettopwood() {
        return this.topwood;
    }
}