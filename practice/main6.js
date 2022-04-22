//Item class

class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

//ItemAndQuantity class

class ItemAndQuantity {
  constructor(item, quantity) {
    this.item = item
    this.quantity = quantity
  }
}


//ShoppingCart class

class ShoppingCart {
  constructor() {
    this.itemAndQuantities = []
  }
  add(item) {
    for (let i = 0; i < this.itemAndQuantities.length; i++) {
      let exsistingItemAndQuantity = this.itemAndQuantities[i]
      if (exsistingItemAndQuantity.item.name === item.name) {
        exsistingItemAndQuantity.quantity += 1
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

//addItemToCart

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
  quantityDOM.style = "grid-column: 1 / 2"
  quantity.innnerHTML = `${item.quantity} x`
  cartDOM.appendChild(quantityDOM)

  let nameDOM = document.createElement("div")
  nameDOM.style = "grid-column: 2 / 3"
  nameDOM.innerHTML = `${item.ite.name}`
  cartDOM.appendChild(nameDOM)

  let costDOM = document.createElement("div")
  costDOM.style = "grid-column: 3 / 4"
  costDOM.innerHTML = `${item.quantity * item.item.price}`
  cartDOM.appendChild(costDOM)
}
totalDOM = document.createElement("div")
totalDOM.innerHTML = `<h4>${cart.getTotalCost()}</h4>`
}

//availableItems

const availableItems = [
  new Item ("Addidas Sneaker", 100.00),
  new Item ("Nike Sneaker", 150.00),
  new Item ("New Balance", 180.00),
  new Item ("Puma", 120.00),
]

let myCart = new ShoppingCart()

//ListDOM

const listDOM = document.getElementById("list")
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




