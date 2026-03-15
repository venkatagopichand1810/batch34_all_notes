
function App() {

    let items = ["Pen", "Book"];
    function addItem() {
        items.push("notebook");
        alert(items)
    }

      function removeItem() {
        items.pop();
        alert(items)
    }


    return (
        <>
    
        {items.map((item) => (
            <p>{item}</p>
        ))}

            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
        </>
    )

}

export default App


// props..

// we are adding
//props..are immutable
// in order to update we have to use state