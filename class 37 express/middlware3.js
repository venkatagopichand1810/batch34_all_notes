const express = require("express");

const app = express();

// inbuilt middleware
app.use(express.static("public"))

app.listen(3000, () => {
    console.log("static files showing using express.static")
})

