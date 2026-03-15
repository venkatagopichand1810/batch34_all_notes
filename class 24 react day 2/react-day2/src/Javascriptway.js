
function Javascriptway() {

    const price = 499.75;

    const name = "Venkat";

    function add(a, b) {
        return a + b;
    }

    // arrow function 
    const multiply = (c, d) => c * d;

    // object

    const product = {
        name: "laptop",
        price: 65000,
        instock: true
    }

    const a = 10;
    const b = 20;

    const age = 17;
    let message = "";

    if (age >= 18) {
        message = "You can enter to movie hall"
    } else if (age <= 10) {
        message = "not possible to enter"
    } else {
        message = "yes yes"
    }

    // array of marks
    const marks = [60, 70, 90, 100, 86];
    let total = 0;
    marks.forEach((mark) => {
        total += mark
    })

    //data and time 
    const today = new Date();

    // logical operators
    const isOnline = false;

    return (
        <>
            <h1>Math methods:</h1>
            <p>Rounded: {Math.round(price)}</p>
            <p>Ceil: {Math.ceil(price)}</p>
            <p>Floor: {Math.floor(price)}</p>
            <p>Max Value: {Math.max(10, 20, 30)}</p>
            <p>Min value: {Math.min(10, 20, 30)}</p>
            <p>Random(0 -1): {Math.random()}</p>

            <h2>String Methods:</h2>
            <p>Uppercase: {name.toUpperCase()}</p>
            <p>Lowercase: {name.toLowerCase()}</p>
            <p>Length: {name.length}</p>
            <p>Replace: {name.replace("Venkat", "Rama")}</p>

            <h3> Functions: </h3>

            <p> Add: {add(10, 20)}</p>

            <p> Multiply: {multiply(10, 20)}</p>

            <h4>Object:</h4>
            <p>Name of the product: {product.name}</p>
            <p>Price of the product: {product.price}</p>

            <h5>Math operations:</h5>

            <p>Add: {a + b}</p>
            <p>Sub: {a - b}</p>
            <p>Mult: {a * b}</p>
            <p>Remainder: {a % b}</p>
            <p>division: {a / b}</p>

            <p>Movie enter</p>
            <strong>{message}</strong>

            <h1>Total: {total}</h1>
            <h2>Avg marks: {total / marks.length}</h2>

            <h1>Date info</h1>
            <p>Date: {today.toDateString()}</p>
            <p>Year: {today.getFullYear()}</p>
            <p>Month: {today.getMonth()}</p>
            <p>Day: {today.getDay()}</p>
            <p>Hours {today.getHours()}</p>

            <h3>Status</h3>
            {isOnline && <p>User is online</p>}
        </>
    )

}

export default Javascriptway