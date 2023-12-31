import Guitar from "./guitarclass.js";

export default class Inventory{
    constructor(){
        this.guitars = [];
    }
    
    addGuitar(serialNumber, price, builder, model, type, backwood, topwood)
    {
        const newGuitar = new Guitar(serialNumber, price, builder, model, type, backwood, topwood);
        this.guitars.push(newGuitar);
    }

    getGuitar(serialNumber){
        for (const guitar of this.guitars){
            if(serialNumber === guitar.SerialNumber){
                return guitar;
            }
        }
        //Null represents intentional absence of an object value;
        return null;
    }
    search(idealGuitar){
        //Destructuring (substracting different properties of ideal guitar);
        const {serialNumber, price, builder, model, type, backwood, topwood} = idealGuitar;


        for (const guitar of this.guitars) {
            if (guitar.price <= price && guitar.builder===builder && guitar.model===model && guitar.type===type && guitar.backwood===backwood && guitar.topwood===topwood)
                {
                return guitar;
            }
        } 
        return null;
    }
    allGuitars() {
        return this.guitars;
    }
}