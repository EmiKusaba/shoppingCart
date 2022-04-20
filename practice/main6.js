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

let cartDOM = document.getElementById("cart")
cartDOM.innerHTML = ""
for(let i = 0; i < cart.itemAndQuantities.length; i++) {
  const item = cart.itemAndQuantities[i]

  let quantityDOM = document.createElement("div")
  quantityDOM.style = "grid-column: 1 / 2"
  quantity.innnerHTML = `${item.quantity} x`
  cartDOM.appendChild(quantityDOM)

  let nameDOM = document.createElement("div")
  nameDOM.style = "grid-column 2 / 3"
  nameDOM.innerHTML = `${item.ite.name}`
  cartDOM.appendChild(nameDOM)
}


//ListDOM




