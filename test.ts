import test from "ava";
import {Product, User} from "./index"
test("Testeo la clase User", (t) => {
    const producto = new Product('Iphone', 10000)
    t.is(producto.name, "Iphone")
    t.is(producto.price, 10000)
});
test("Testeo la clase Product y sus métodos", (t) => {
    const fer = new User('Fernando')
    const producto = new Product('Iphone', 10000)
    fer.addProduct(producto)
    t.is(fer.name,'Fernando')
    t.is(fer.products[0].name,'Iphone')
    t.is(fer.products[0].price,10000)
});
