import ProductCard from "./ProductCard"


function ProductList({products}) {

    return (
        <div>
            {products.map((product) => (
                <ProductCard
                    name = {product.name}
                    image = {product.image}
                    description = {product.description}
                    price = {product.price}
                />
            ))}
        </div>
    )



}

export default ProductList