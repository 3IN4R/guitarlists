export default class Guitar{
    constructor(serialNumber, price, builder, model, type, backwood, topwood) {
        this.SerialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backwood = backwood;
        this.topwood = topwood;
    }

    getSerialNumber() {
        return this.SerialNumber;
    }
    getPrice() {
        return this.price;
    }
    getBuilder() {
        return this.builder;
    }
    getModel() {
        return this.model;
    }
    getType() {
        return this.type;
    }
    getBackWood() {
        return this.backwood;
    }
    getTopWood() {
        return this.topwood;
    }
}