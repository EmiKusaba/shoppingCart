//Item

class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

//ShoppingCart

class ShoppingCart {
  constructor() {
    this.items = []
  }
  add(item) {
    for (let i = 0; i < this.items.length; i++) {
      let exsistingItemAndQuantity = this.items[i]
      if (exsistingItemAndQuantity.item.name = item.name) {
        exsistingItemAndQuantity.quantity += 1
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

  addItemToCart(cart, item, quantity) {
    let cart = []
    cart.add(item, quantity)
    refreshCart(cart)
  }
}

const refreshCart = () => {

}

const availableItems = [
  new Item("Banana", 2.00),
  new Item("Apple", 2.00),
  new Item("Lemon", 2.00),
  new Item("Orange", 2.00),
  new Item("Strawberry", 2.00)
]

let myCart = new ShoppingCart

let listDOM = document.getElementById("list")
for(let i = 0; i < availableItems.length; i++) {
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
  addToCartDOM.style = "grid-column: 3 / 4;"
  addToCartDOM.className = "material-icons"
  addToCartDOM.innerHTML = "add_shopping_cart"
  addToCartDOM.addEventListener("click", ()=>addItemToCart(myCart, item))  
  listDOM.appendChild(addToCartDOM)

}
