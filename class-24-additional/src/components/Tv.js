
import "./Tv.css"
// Tv component with props
function Tv({image, brand, inches, children}) {

  // #1
  // const {image, brand, inches} = props;

    return (
        <>
          <div className="tv-card">
            {/* accessing the props */}
             <img src = {image} className="tv-image"/>
            <h2 className="tv-brand">{brand}</h2>
            <p className="tv-size">{inches}</p>
            <strong>{children}</strong>
           
          </div>
        </>
    )

}

export default Tv

// we have create another component(function)
// destructuring concepts

