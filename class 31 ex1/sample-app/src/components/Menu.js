import CartIcon from "./CartIcon"

function Menu() {

    return (
        <div style={{float: "right"}}>
            <span style={{marginRight: "15px"}}>Home</span>
             <span style={{marginRight: "15px"}}>Products</span>
              <span style={{marginRight: "15px"}}>About</span>

              {/* finally pass to cartIcon */}

              <CartIcon  />

        </div>
    )

}

export default Menu