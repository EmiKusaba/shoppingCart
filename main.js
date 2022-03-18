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
    let totalCost = []

    for(let i = 0; i < this.items.length; i++) {
      let itemAndQuantity = this.items[i]
      totalCost += itemAndQuantity.quantity * itemAndQuantity.item.price
    }
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
    console.log(item)
    let el = document.createElement("p")
    el.innerHTML = `${item.quantity}x ${item.item.name} - $${item.item.price * item.quantity}`
    cartDOM.appendChild(el)
  }


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
  let el = document.createElement("p")
  el.innerHTML = `${item.name} - $${item.price}`
  let addToCart = document.createElement("span")
  addToCart.className = "material-icons"
  addToCart.innerHTML = "add_shopping_cart"
  addToCart.addEventListener("click", ()=>addItemToCart(myCart, item))
  el.appendChild(addToCart)
  listDOM.appendChild(el)
}
