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
for( i = 0; i < cart.items.length; i++) {
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