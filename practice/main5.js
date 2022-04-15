//Item
class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

//ItemAndQuantity
class ItemAndQuantity {
  constructor(item, quantity) {
    this.item = item
    this.quantity = quantity
  }
}


//ShoppingCart
class ShoppingCart {
  constructor() {
    this.ItemAndQuantities = []
  }
}



//availableItem
let availableItems = [
  new Item("Goma", 1.00),
  new Item("Kinako", 1.00),
  new Item("Anko", 1.00),
]

let myCart = new ShoppingCart()
//ListDOM

let listDOM = document.getElementById("list")
for (let i = 0; i < availableItems.length; i++) {
  const item = availableItems[i]

  let nameDOM = document.createElement("div")
  nameDOM.style = "grid-column: 1 / 2;"
  nameDOM.innerHTML = `${item.name}`
  listDOM.appendChild(nameDOM)

  let priceDOM = document.createElement("div")
  priceDOM.style = "grid-column: 2 / 3;"
  priceDOM.innerHTML = `${item.price}`
  listDOM.appendChild(priceDOM)

  let addToCartDOM = document.createElement("div")
  addToCartDOM.style = "grid-column: 3 / 4;"
  addToCartDOM.className = "material-icons"
  addToCartDOM.innerHTML = "add_shopping_cart"
  addToCartDOM.addEventListener("click", () => addItemToCart(mycart, item))
  listDOM.appendChild(addToCartDOM)
}

