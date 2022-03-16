//class Item

class List {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

//class Shopping cart

class ShoppingCart {
  constructor() {
    this.items = []
  }
  update(item, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      let existingItemAndQuantity = this.items[i]
      if (existingItemAndQuantity.item.name === item.name) {
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

  const addToCart = (cart, item, quantity) => {
    cart.push(item, quantity)
    refreshCart(cart)
  }

  const refreshCart = (cart) => {
    let cartDOM = document.getElementbyId("cart")
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