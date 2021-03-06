//Item
class Item {
  constructor(name, price) {
    this.price = price
    this.name = name
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
    this.itemAndQuantities = []
  }

  add(item) {
    for (let i = 0; i < this.itemAndQuantities.length; i++) {
      let existingItemAndQuantity = this.itemAndQuantities[i]
      if (existingItemAndQuantity.item.name === item.name){
        existingItemAndQuantity.quantity += 1
      return
    }
  }
    this.itemAndQuantities.push(
      new ItemAndQuantity(item, 1)
    )
  }

  getTotalCost() {
    let totalCost = 0
    for (let i = 0; i < this.itemAndQuantities.length; i++) {
      let itemAndQuantity = this.itemAndQuantities[i]
      totalCost += itemAndQuantity.item.price * itemAndQuantity.quantity
    }
    return totalCost
  }

}

//addToCart

const addItemToCart = (cart, item) => {
cart.add(item)
refreshCart(cart)
}


//refreshCart

const refreshCart = (cart) => {
  let cartDOM = document.getElementById("cart")
  cartDOM.innerHTML = ""
  for(let i = 0; i < cart.itemAndQuantities.length; i++) {
    const item = cart.itemAndQuantities[i]
    
    let quantityDOM = document.createElement("div")
    quantityDOM.style = ".grid-column: 1 / 2;"
    quantityDOM.innerHTML = `${item.quantity} x`
    cartDOM.appendChild(quantityDOM)

    let nameDOM = document.createElement("div")
    nameDOM.style = ".grid-column: 2 / 3;"
    nameDOM.innerHTML = `${item.item.name}`
    cartDOM.appendChild(nameDOM)

    let costDOM = document.createElement("div")
    costDOM.style = ".grid-column: 3 / 4;"
    costDOM.innerHTML = `$${item.quantity * item.item.price}`
    cartDOM.appendChild(costDOM)
  }
  let totalDOM = document.getElementById("total")
  totalDOM.innerHTML = `<h4>$${cart.getTotalCost()}</h4>`
}


//avairableItem
const availableItems = [
  new Item("Strawberry", 1.00),
  new Item("Blueberry", 2.00),
  new Item("Rasberry", 3.00),
  new Item("Hahoberry", 100.00),
  new Item("Luluberry", 500.00),
]

let myCart = new ShoppingCart()

//listDOM

let listDOM = document.getElementById("list")
for(let i = 0; i < availableItems.length; ++i) {
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