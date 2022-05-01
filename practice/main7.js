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


//listDOM