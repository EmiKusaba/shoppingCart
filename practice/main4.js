//item class
class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

//Shopping Cart
class ShoppingCart {
  constructor(){
    this.itemAndQuantities = []
  }
  add(item){
    for(let i = 0; i < this.itemAndQuantities.length; i++) {
      let exsistingItemAndQuantity = this.itemAndQuantities[i]
      if(exsistingItemAndQuantity.item.name === item.name) {
        exsistingItemAndQuantity += 1
        return
      }
      this.itemAndQuantities.push(
        new ItemAndQuantity(item, 1)
      )
    }
  }

  getTotalCost() {

  }
}

//refreshCart 

const refreshCart = (cart) => {

}

//availableItem

let availableitemAndQuantities = [
new Item("Tomato", 1.00),
new Item ("Cabbage", 1.00),
new Item ("Lemon", 1.00),
new Item ("Spinach", 2.00),
new Item ("Water", 1.00),
new Item ("Bread", 3.00),
new Item ("Orange", 2.00),

]
let myCart  = new ShoppingCart

//ListDOM

let listDOM = document.getElementById("list")
for(let i = 0; i < availableitemAndQuantities.length; i++) {
  const item = availableitemAndQuantities[i]


  let nameDOM = document.createElement("div")
  nameDOM.style = "grid-culumn: 1 / 2;"
  nameDOM.innerHTML = `${item.name}`
  listDOM.appendChild(nameDOM)

  let priceDOM = document.createElement("div")
  priceDOM.style = "grid-culumn: 2 /3;"
  priceDOM.innerHTML = `$${item.price}`
  listDOM.appendChild(priceDOM)

  let addToCartDOM = document.createElement("div")
  addToCartDOM.style = "grid-culumn: 3 / 4;"
  addToCartDOM.className = "material-icons"
  addToCartDOM.innerHTML = "add_shopping_cart"
  addToCartDOM.addEventListener("click", ()=>addItemToCart(myCart, item))  
  listDOM.appendChild(addToCartDOM)
}



