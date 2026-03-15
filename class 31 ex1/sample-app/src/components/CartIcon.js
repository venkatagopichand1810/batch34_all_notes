import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function CartIcon() {
    // read directly from the global store
    const {cartCount, setCartCount} = useContext(CartContext)

    return (
        <span style={{fontWidth: "bold"}}>
            CART: {cartCount}

             <button
                onClick={() => setCartCount(cartCount + 1)}>
                    Add
                </button>
        </span>

       
    )

}

export default CartIcon