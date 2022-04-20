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



//ListDOM




