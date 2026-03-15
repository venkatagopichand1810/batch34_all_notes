
const path = require("path");

const fileName = path.basename("/users/admin/file.txt");

const ext = path.extname("file.jpg")

// join paths
const fullpath = path.join("users", "admin", "images", "photo.png");

const parsedPath = path.parse("/users/admin/file.txt");

console.log(fileName)

console.log(ext)

console.log(fullpath);

console.log(parsedPath)