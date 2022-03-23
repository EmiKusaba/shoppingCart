//Item
class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

//shoppingCart

class ShoppingCart {
  constructor() {
    this.items = []
  }

  add(item) {
    for(let i = 0; i < this.items.length; i++) {
      let exsistingItemAndQuantity = this.items[i]
      if(exsistingItemAndQuantity.item.name === item.name ) {
        existingItemAndQuantity.quantity += 1
        return

      }
      this.items.push(
        {
          "item": item,
          "quantity": 1
        }
      )
    }
  }
}