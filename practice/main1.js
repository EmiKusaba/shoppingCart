//class Item

class List {
  constructor(name,price) {
    this.name = name
    this.price= price
  }
}

//class Shopping cart

class ShoppingCart {
  constructor() {
    this.items = []
  }
  update(item,quantity) {
    for(let i = 0; i < this.items.length; i++) {
      let existingItemAndQuantity = this.items[i]
      if(existingItemAndQuantity === list.name) {
        existingItemAndQuantity.quantity = quantity
        return
      }
      this.items.push(
        {
          "item": item,
          "quantity": quantity
        }
      )
    }
  }
}