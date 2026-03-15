import ProductList from "./components/ProductList"

function App() {

  // products real time
  const products = [
    {
      id: 1, 
      name: "Panasonic 1.5 Ton 5",
      image: "https://m.media-amazon.com/images/I/611kC3cgqwL._SX679_.jpg",
      description: "Panasonic 1.5 Ton 5 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 4-Way, PM 0.1 Filter, CS/CU-NU18AKY5WX, White) Visit the Panasonic Store",
      price:  "₹41,340 "
    },

    {
      id: 1, 
      name: "Panasonic 1.5 Ton 5",
      image: "https://m.media-amazon.com/images/I/611kC3cgqwL._SX679_.jpg",
      description: "Panasonic 1.5 Ton 5 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 4-Way, PM 0.1 Filter, CS/CU-NU18AKY5WX, White) Visit the Panasonic Store",
      price:  "₹41,340 "
    },


    {
      id: 1, 
      name: "Panasonic 1.5 Ton 5",
      image: "https://m.media-amazon.com/images/I/611kC3cgqwL._SX679_.jpg",
      description: "Panasonic 1.5 Ton 5 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 4-Way, PM 0.1 Filter, CS/CU-NU18AKY5WX, White) Visit the Panasonic Store",
      price:  "₹41,340 "
    },

    {
      id: 1, 
      name: "Panasonic 1.5 Ton 5",
      image: "https://m.media-amazon.com/images/I/611kC3cgqwL._SX679_.jpg",
      description: "Panasonic 1.5 Ton 5 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 4-Way, PM 0.1 Filter, CS/CU-NU18AKY5WX, White) Visit the Panasonic Store",
      price:  "₹41,340 "
    },

    {
      id: 1, 
      name: "Panasonic 1.5 Ton 5",
      image: "https://m.media-amazon.com/images/I/611kC3cgqwL._SX679_.jpg",
      description: "Panasonic 1.5 Ton 5 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 4-Way, PM 0.1 Filter, CS/CU-NU18AKY5WX, White) Visit the Panasonic Store",
      price:  "₹41,340 "
    }
  ]

  return (
    <>
    <div>
      <h1>Product List</h1>
      <ProductList products = {products} />

    </div>
    
    </>
  )

}

export default App