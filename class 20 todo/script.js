// get the HTML element ref by ID

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn")
const updateBtn = document.getElementById("updateBtn");
const taskList = document.getElementById("taskList");


// load the tasks from the local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //get the saved tasks from the local storage

//dislay the task immediately on page load 
displayTasks();


// add task
addBtn.addEventListener("click", () => {

    // get the text from the input
    let task = taskInput.value;

    //if empty string, dont allow
    if (task === "") {
        alert("Please enter the task");
        return; //stop the execution
    }

    // push the new task into array
    tasks.push(task);

    // save the updated tasks to the localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // display the list
    displayTasks();

    // clear the input field
    taskInput.value = "";

})


// function to display the tasks

function displayTasks() {

    // clear the existing list before adding again
    taskList.innerHTML = ""

    // loop through each task and display

    tasks.forEach((task, index) => {

        // create the new list item
        let li = document.createElement("li");

        // dispaly the task name
        li.innerHTML = `
        <span>${task}</span>
        
        <div class = "actions">
            <button class = "editBtn">Edit</button>
            <button class = "deleteBtn">Delete</button>
        </div>
        
        `;

        // add li to ul
        taskList.appendChild(li)

    })

}



// // json parse
// convert json stirng -> noram js Object
// convert json string -> array
// json string -> number
