//Item
class Item {
  constructor(name,price) {
    this.price = price
    this.name = name
  }
}

//ItemAndQuantity
class ItemAndQuantity {
  constructor(item,quantity) {
   this.item = item
   this.quantity = quantity
  }
}
//ShoppingCart

class ShoppingCart {
 constructor() {
   this.itemAndQuantities = []
 }

 add(item) {
    for(let i = 0; i < this.itemAndQuantities.length; i++) {
      let existingItemAndQuantity = this.itemAndQuantities[i]
      if(existingItemAndQuantity.item.name === item.name)
      existingItemAndQuantity.quantity += 1
      return
    }
    this.itemAndQuantities.push(
      new ItemAndQuantity(item, 1)
    )
 }

 getTotalCost() {

 }
}


//avairableItem
let availableItems = [
  new Item("Strawberry", 1.00),
  new Item("Blueberry", 2.00),
  new Item("Rasberry", 3.00),
  new Item("Hahoberry", 100.00),
  new Item("Luluberry", 500.00),
]

let myCart = new ShoppingCart()

//listDOM
