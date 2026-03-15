import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import CartModal from "./components/CartModal" 
import ProductList from "./components/ProductList"

import "./App.css"
function App() {

  // state to store the products 
  const[products, setProducts] = useState([]);

  // state to store the cart items
  const[cart, setCart] = useState([])

  // state to control the modal visibility
  const[isCartOpen, setIsCartOpen] = useState(false);

  // fetch products from the fake store api 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json()) // convert the response to the json
    .then((data) => setProducts(data));
  })


  // function to add the product to the cart
  const addToCart = (product) => {
    
    // check if the product is already exists 
    const exists = cart.find((item) => item.id === product.id);

    if(exists){
      alert("Item is already added to the cart")
    } else {
      // add the new item to the cart
      setCart([
        ...cart,
        product
      ])
    }

  }

  // function to remove the product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }


  return (
    <div>
      <Navbar cartCount = {cart.length} openCart = {() => setIsCartOpen(true)}/>
      <ProductList products = {products} addToCart = {addToCart}/>

      {/* cart modal */}
      {isCartOpen && (
        <CartModal 
          cart = {cart}
          closeModal = {() => setIsCartOpen(false)}
          removeFromCart = {removeFromCart}
          />
      )}
     

    </div>
  )

}

export default App