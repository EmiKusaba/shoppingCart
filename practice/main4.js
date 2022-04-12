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
    let totalCost = 0
    for(let i = 0; this.itemAndQuantities.length; i++) {
      let itemAndQuantity  = this.itemAndQuantities[i]
      totalcost += itemAndQuantity.item.price * itemAndQuantity.quantity

    }
    return totalCost
  }
}

//addItemToCart

const addItemToCart = (cart,item) =>{
cart.add(item)
refreshCart(cart)
}

//refreshCart 

const refreshCart = (cart) => {
let cartDOM  =document.getElementById("cart")
cartDOM.innerHTML = ""
for(let i = 0; i < cart.itemAndQuantities.length; i++) {
  const item = cart.itemAndQuantities[i]
  
  let quantityDOM = document.createElement("div")
  quantityDOM.style = ".grid-culumn 1 / 2;"
  quantityDOM.innerHTML = `${item.quantity} x`
  cartDOM.appendChild(quantityDOM)

  let nameDOM = document.createElement("div")
  quantityDOM.style = ".grid-culumn 2 / 3;"
  nameDOM.innerHTML = `${item.item.name}`
  cartDOM.appendChild(nameDOM)

  let costDOM = document.createElement("div")
  costDOM.style = ".gris-culum 3 / 4;" 
  costDOM.innerHTML = `${item.quantity * item.item.price}`
  cartDOM.appendChild(costDOM)

}
let totalDOM = document.getElementById("total")
totalDOM.innerHTML = `<h4>${cart.getTotalCost()}</h4>`
}

//availableItem

let availableItems = [
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
for(let i = 0; i < availableItems.length; i++) {
  const item = availableItems[i]


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



