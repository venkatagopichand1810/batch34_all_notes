// fs module used to work with files and folders
//create files, read files, update files, delete files..

const fs = require("fs")

fs.readFile("venkat.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err);
        return
    }
    // print the file content
    console.log(data)
})


// create the new file
fs.writeFile("guvi.txt", "hcl guvi is the one of the top", (err) => {
      if(err){
        console.log(err);
        return
    }
    //create the new file message
    console.log("file is successfully created")
})


// overwrite the content
fs.writeFile("venkat.txt", "hcl guvi is the one of the top", (err) => {
      if(err){
        console.log(err);
        return
    }
    //create the new file message
    console.log("overwrite successfully")
})

// append the content
fs.appendFile("guvi.txt", "\nmern stack training", (err) => {
    if(err){
        console.log(err);
        return
    }
});
console.log("appended successfully")


// delete the file
fs.unlink("package.json", (err) => {
    if(err){
        console.log(err);
        return
    }
});
console.log("deleted the file successfully")

// rename the file

fs.rename("venkat.txt", "ram.txt", (err) => {
    if(err){
        console.log(err);
        return
    }
});
console.log("file renamed")


// check file exits

fs.access("data.txt", (err) => {
    if(err){
        console.log("file does not exist");
        return; //stop the execution
    } else {
        console.log("file is exists")
    }
})


// create the new folder
fs.mkdir("sample-app", (err) => {
    if(err){
        console.log(err);
        return
    }
    console.log("folder is created")
})


fs.rmdir("sample-app", (err) => {
    if(err){
        console.log(err);
        return
    }
    console.log("folder is deleted")
})