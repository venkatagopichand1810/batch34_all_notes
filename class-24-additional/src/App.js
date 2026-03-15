
import Tv from "./components/Tv"; // import statement
import Mobile from "./components/Mobile";

// import images
import lgTV from "./assets/tv1.png";
import samsungTV from "./assets/tv2.png";
import sonyTV from "./assets/tv3.png";
import LavaTV from "./assets/tv4.png";

// import images for the mobiles
import iphone from "./assets/mobile1.png"
import samsung from "./assets/mobile2.png"
import mi from "./assets/mobile3.png"
import sony from "./assets/mobile4.png"


import "./App.css"


function App() {

  return (
    <>
      <div className="product-container">

        <h1 className="header">Available TV's</h1>
        <div className="product-section">
          <Tv brand="LG" inches="42" image={lgTV} />
          <Tv brand="Samsung" inches="62" image={samsungTV}> Best Seller </Tv>
          <Tv brand="Sony" inches="32" image={sonyTV} />
          <Tv brand="Pansonic" inches="92" image={LavaTV} />
        </div>


         <h1 className="header">Available Mobiles</h1>
        <div className="product-section">
          <Mobile name="iphone" price="76000" offer="45% off" image={iphone} />
          <Mobile name="samsung" price="56000" offer="15% off" image={samsung} />
          <Mobile name="mi" price="6000" offer="65% off" image={mi} />
          <Mobile name="sony" price="9000" offer="75% off" image={sony} />
        </div>
      </div>


    </>
  )
}
export default App

