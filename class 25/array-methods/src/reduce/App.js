function App() {
    const prices = [100, 200, 400, 900];

    // reduce method to find the total price
    const total = prices.reduce((acc, curr) => acc + curr, 0)

    const cart = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 1, name: "Mouse", price: 70000 },
        { id: 1, name: "Keyboard", price: 300 },
    ]

    // cal total cart price
    const totalCartPrice = cart.reduce((acc, item) => {
        return acc + item.price
    }, 0)


    return (
        <div>
            <h3>Sum of Prices</h3>
            <p>Total: {total} </p>

            <h1>Total Cart value: {totalCartPrice}</h1>
        </div>
    )

}

export default App