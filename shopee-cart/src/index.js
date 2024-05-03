import * as cartServices from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Mini Game", 79.99, 1);
const item2 = await createItem("Game Boy", 59.90, 3);

// adicionei dois itens ao carrinho
await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

await cartServices.removeItem(myCart, 1)

await cartServices.displaycart(myCart);

// deletei dois itens ao carrinho
// await cartServices.deleteItem(myCart, item2.name);
// await cartServices.deleteItem(myCart, item1.name);

await cartServices.calculateTotal(myCart);