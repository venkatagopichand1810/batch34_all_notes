function CartModal({cart, closeModal, removeFromCart}) {

    return (
        <div className="modal-backdrop">
            <div className="modal">

            
            <h2>Cart Items</h2>

            {/* if cart is empty  */}
            {cart.length === 0 && <p>No items in the cart</p>}

            {/* if any item added to the cart, the display the cart items */}

            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src = {item.image} />
                    <p>{item.title}</p>
                      <p>{item.price}</p>
                    <button onClick={() => removeFromCart(item.id)} className="btn-remove-cart-item">
                        Remove
                    </button>
                </div>
            ))}

            {/* close modal */}
            <button onClick={closeModal} className="close-btn">Close</button>
            
        </div>
        </div>
    )

}

export default CartModal