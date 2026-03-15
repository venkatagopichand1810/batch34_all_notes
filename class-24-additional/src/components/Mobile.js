
import "./Mobile.css"
// Mobile component with props
function Mobile({image, name, price}) {

    return (
        <>
          <div className="mobile-card">
            {/* accessing the props */}
             <img src = {image} className="mobile-image"/>
            <h2 className="mobile-brand">{name}</h2>
            <p className="mobile-price">{price}</p>
           
          </div>
        </>
    )

}

export default Mobile

// we have create another component(function)

