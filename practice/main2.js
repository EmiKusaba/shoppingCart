//Item
class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

//shoppingCart

class ShoppingCart {
  constructor() {
    this.items = []
  }

  add(item) {
    for (let i = 0; i < this.items.length; i++) {
      let exsistingItemAndQuantity = this.items[i]
      if (exsistingItemAndQuantity.item.name === item.name) {
        existingItemAndQuantity.quantity += 1
        return
      }
    }
    this.items.push(
      {
        "item": item,
        "quantity": 1
      }
    )
  }

  getTotalCost() {

  }
}

const addItemToCart = (cart, item, quantity) => {
  cart.add(item, quantity)
  refreshCart(cart)
}

const refreshCart = (cart) => {
  let cartDOM = document.getElementsById("cart")
  cartDOM.innerHTML = ""
  for (i = 0; i < cart.items.length; i++) {
    const item = cart.items[i]

    let quantityDOM = document.createElement("div")
    quantityDOM.style = ".grid-column: 1 / 2;"
    quantityDOM.innerHTML = `${item.quantity} x`
    cartDOM.appendChild(quantityDOM)
  }
}

const availableItems = [
  new Item("Banana", 1.00),
  new Item("Strawberry Pie", 2.00),
  new Item("Chocochip Cookie", 3.00),
  new Item("Water", 1.00),
  new Item("Lemonade", 2.00)
]

let myCart = new ShoppingCart()

//List DOM
let listDOM = document.getElementById("list")
for (let i = 0; i < availableItems.length; i++) {
  const item = availableItems[i]

  let nameDOM = document.createElement("div")
  nameDOM.style = "grid-column: 1 / 2;"
  nameDOM.innerHTML = `${item.name}`
  listDOM.appendChild(nameDOM)

  let priceDOM = document.createElement("div")
  priceDOM.style = "grid-column: 2 / 3;"
  priceDOM.innerHTML = `$${item.price}`
  listDOM.appendChild(priceDOM)

  let addToCartDOM = document.createElement("div")
  addToCartDOM.style = "grid-column: 3 / 4"
  addToCartDOM.className = "material-icons"
  addToCartDOM.innerHTML = "add_shopping_cart"
  addToCartDOM.addEventListener("click", () => addToCartDOM(myCart, item))
  listDOM.appendChild(addToCartDOM)

}