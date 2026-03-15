db.products.insertOne({name: "ac", price: 60000, brand: "LG", rating: 4.9, stock: 150, 
    details: {capacity: "15lit", type: "top door"}})



db.products.insertOne({name: "ac", price: 60000, brand: "LG", rating: 4.9, stock: 150, 
    details: {capacity: "15lit", type: "top door"}, colors: ["black", "white"]})


db.products.insertOne({name: "RRR", genre: "action movie", releasedata: 2022, director: "rajamouli"})


db.products.insertMany([{name: "ac", price: 60000, brand: "LG", rating: 4.9, stock: 150}, 
        {name: "cycle", price: 2400, brand: "hero", rating: 5.0, stock: 200}, 
        {name: "scooter", price: 76000, brand: "hero hero", rating: 4.2, stock: 200}])




