// import create context

import { createContext, useState } from "react";

// create the context
export const CartContext = createContext();


// create the provider component
function CartProvider({children}){
    // global state
    const[cartCount, setCartCount] = useState(5)

    return (
        <CartContext.Provider value={{cartCount, setCartCount}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

