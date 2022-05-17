//Item
class Item {
  constructor(name,price) {
    this.name = name
    this.price = price
  }
}

//ItemAndQuantitiy
class ItemAndQuantitiy {
  constructor(item,quantity) {
    this.item = item
    this.quantity = quantity
  }
}

//ShoppingCart
const ShoppingCart {
 
  
}


//availableItems
const availableItems = [
  new Item("Coffee", 2.00),
  new Item("Tea", 2.00),
  new Item("Milk", 1.00),
  new Item("Chocolate Cookie", 1.00),
  new Item("Apple Pie", 3.00),
]

// let myCart = new ShoppingCart

//listDOM

let listDOM = document.getElementById("list")
for(let i = 0; i < availableItems.length; i++) {
  const item = availableItems[i]

  let nameDOM = document.createElement("div")
  nameDOM.style = "grid-column: 1 / 2;"
  nameDOM.innerHTML = `${item.name}`
  listDOM.appendChild(nameDOM)

  let priceDOM = document.createElement("div")
  priceDOM.style = "grid-column: 2 / 3;"
  priceDOM.innerHTML = `${item.price}`
  listDOM.appendChild(priceDOM)

  let addToCartDOM = document.createElement("div")
  addToCartDOM.style = "grid-column: 3 / 4;"
  addToCartDOM.className = "material-icons"
  addToCartDOM.innerHTML = "add_shopping_cart"
  addToCartDOM.addEventListener("click", ()=>addItemToCart(myCart, item))  
  listDOM.appendChild(addToCartDOM)


}


