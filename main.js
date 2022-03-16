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

  update(item, quantity) {
    for(let i = 0; i < this.items.length; i++) {
      let existingItemAndQuantity = this.items[i]
      if( existingItemAndQuantity.item.name === item.name ) {
        existingItemAndQuantity.quantity = quantity
        return
      }
    }
    this.items.push(
      {
        "item": item,
        "quantity": quantity
      }
    )
  }
}

const addItemToCart = (cart, item, quantity) => {
  cart.update(item, quantity)
  refreshCart(cart)
}


const refreshCart = (cart) => {
  let cartDOM = document.getElementById("cart")
  cartDOM.innerHTML = ""
  console.log(cartDOM)
  for(let i = 0; i < cart.items.length; i++) {
    const item = cart.items[i]
    console.log(item)
    let el = document.createElement("p")
    el.innerHTML = `${item.item.name} - ${item.item.price * item.quantity}`
    cartDOM.appendChild(el)
  }
}

const availableItems = [
  new Item("Banana", 1.00),
  new Item("Apple", 2.00),
  new Item("Milk", 3.00),
]

let cart = new ShoppingCart()

let listDOM = document.getElementById("list")
for(let i = 0; i < availableItems.length; ++i) {
  const item = availableItems[i]
  let el = document.createElement("p")
  el.innerHTML = `${item.name} - $${item.price}`
  let addToCart = document.createElement("span")
  addToCart.className = "material-icons"
  addToCart.innerHTML = "add_shopping_cart"
  addToCart.addEventListener("click", ()=>addItemToCart(cart, item, 1))
  el.appendChild(addToCart)
  listDOM.appendChild(el)
}
