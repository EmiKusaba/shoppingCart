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