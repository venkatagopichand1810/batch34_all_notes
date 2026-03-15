
function App() {

    const numbers = [10, 20, 30, 40, 50];

    // const sliceing = numbers.slice(0, 3); //3 will be excluded

    const spliceValues = numbers.splice(1, 3);


    return (
        <>
            {/* <h3>Slice values: <li>{sliceing.join(", ")}</li></h3> */}
            <h1>original array <p>{numbers.join(", ")}</p></h1>
            <h2>Spliced array <p>{spliceValues.join(", ")}</p></h2>
        </>
    )

}

export default App