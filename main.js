class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class ShoppingCart {
  constructor() {
    this.items = []
  }

  add(item) {
    for(let i = 0; i < this.items.length; i++) {
      let existingItemAndQuantity = this.items[i]
      if( existingItemAndQuantity.item.name === item.name ) {
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
    let totalCost = 0

    for(let i = 0; i < this.items.length; i++) {
      let itemAndQuantity = this.items[i]
      totalCost += itemAndQuantity.quantity * itemAndQuantity.item.price
    }

    return totalCost
  }
}

const addItemToCart = (cart, item) => {
  cart.add(item)
  refreshCart(cart)
}


const refreshCart = (cart) => {
  let cartDOM = document.getElementById("cart")
  cartDOM.innerHTML = ""
  for(let i = 0; i < cart.items.length; i++) {
    const item = cart.items[i]
    
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

const availableItems = [
  new Item("Banana", 1.00),
  new Item("Apple", 2.00),
  new Item("Milk", 3.00),
]

let myCart = new ShoppingCart()

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
