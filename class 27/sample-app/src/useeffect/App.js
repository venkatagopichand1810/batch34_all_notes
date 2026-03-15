
import { useEffect, useState } from "react";

import "./App.css"

function App() {
  // we are going the create the usestate variable to hold the product response
  const [products, setProducts] = useState([])

  // we wanted to do the api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json()) //we have to convert response to json
      // we got the json data, we need to hold it
      .then((data) => setProducts(data))
  }, [])

  return (
    <>
      <div className="app">
        <h2 className="heading">Products</h2>
        <div className="product-container">
          {products.map((product) => (
            <div className="product-card">
              <img src={product.image}  className="product-image"/>
              <h3>{product.title}</h3>
              <p>Rs. {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App