

function ProductCard({ name, image, description, price }) {

    return (
        <>
            <img src={image} width={200} height={200} />
            <strong>{name}</strong>
            <p>{description}</p>
            <small>{price}</small>

        </>
    )

}

export default ProductCard