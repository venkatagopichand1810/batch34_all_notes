// find all the products
db.products.find()

db.products.findOne({ name: "scooter" })
db.products.find({ name: "scooter" })

db.products.findOne({ brand: "hero" })
db.products.findOne({ price: 76000 })
db.products.find({ price: { $gt: 5000 } })
db.products.findOne({ price: { $lt: 5000 } })
db.products.findOne({ rating: { $gte: 4.5 } })
db.products.find({ price: { $gt: 10000, $lt: 50000 } })
db.products.find({ rating: { $gte: 4.5 } })
db.products.find({ brand: "LG", price: { $gt: 10000 } })
db.products.find({ $or: [{ brand: "hero" }, { brand: "samsung" }] })
db.products.find({ price: { $not: { $gt: 40000 } } })
db.products.findOne({ _id: ObjectId('699164a521052c1cb790df04') })



db.products.find().limit(2); //limit to only 2 products

db.products.find().skip(2); //query to skip first 2 products


db.products.find().skip(2).limit(1); //skip frist 2 product, and limit to only 1 product

db.products.find().limit(5); //it will show 5 products 


db.products.find().sort({ price: -1 }); //desc order

db.products.find().sort({ price: 1 }); //asc order


db.products.find({}, { name: 1, price: 1 }); //project only name and price

db.products.find({}, { _id: 0, name: 1, price: 1 }); //dont show id, show only name and price

db.products.find({}, { _id: 0, stock: 0, rating: 0 }); //in the given object dont show id, stock and rating

db.products.find({}, { name: 1, stock: 1, _id: 0 }); //project only name and stock 

db.products.find({}, { name: 1, _id: 0 });


db.products.find({}, { name: 1, stock: 1, _id: 0 })

db.products.find({ price: { $gt: 3000 } }, { name: 1, price: 1, _id: 0 })



db.products.find({ brand: "LG", price: { $gt: 10000 } }, { name: 1, price: 1, _id: 0 })

db.products.find({ $and: [{ rating: { $gt: 4.3 } }, { stock: { $gt: 10 } }] }, { name: 1, rating: 1, _id: 0 })

db.products.find({ $and: [{ rating: { $gt: 4.3 } }, { stock: { $gt: 180 } }] }, { name: 1, rating: 1, stock: 1, _id: 0 })