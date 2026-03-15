import mongoose from "mongoose";

// define the schema
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },

    ratings: {
        type: Number,
        required: true, 
        min: 1, 
        max: 5
    },
    genre: {
        type: Array
    },
    isActive: {
        type: Boolean
    },
    comments: [
        {
            value: {type: String},
            publish: {
                type: Date, 
                default: Date.now
            }
        }
    ]
})

// create the model(collection, table)
const MovieModel = mongoose.model("VenkatMovies", movieSchema)

// const insertManyDocs = async () => {
//     try {
//         // create the new document
//         const m1 = new MovieModel({
//             name: "RRR",
//             ratings: 5,
//             genre:["action", "drama", "bond"],
//             isActive: false, 
//             comments: [{
//                 value: "extraordinary movie, super hit"
//             },{
//                 value: "movie is very good"
//             }
        
//         ]
//         });


//             const m2 = new MovieModel({
//             name: "su from so",
//             ratings: 4,
//             genre:["action", "drama", "bond"],
//             isActive: false, 
//             comments: [{
//                 value: "extraordinary movie, super hit"
//             },{
//                 value: "movie is very good"
//             }
        
//         ]
//         });

//             const m3 = new MovieModel({
//             name: "Basha",
//             ratings: 5,
//             genre:["action", "drama", "bond"],
//             isActive: false, 
//             comments: [{
//                 value: "extraordinary movie, super hit"
//             },{
//                 value: "movie is very good"
//             }
        
//         ]
//         });

//             const m4 = new MovieModel({
//             name: "Arjun",
//             ratings: 5,
//             genre:["action", "drama", "bond"],
//             isActive: false, 
//             comments: [{
//                 value: "extraordinary movie, super hit"
//             },{
//                 value: "movie is very good"
//             }
        
//         ]
//         });


//         // save the document
//         const result = await MovieModel.insertMany([m1, m2, m3, m4]); //save method is used to save the data
//         console.log(result)

//     } catch(error){
//         console.log(error)
//     }
// }


// retrive all the documents
const allDocs = async () => {
    try {
        const result = await MovieModel.find();
        // console.log(result)

        // iterate over the data 
        result.forEach((item) => {
            console.log(item.name);
            console.log(item.genre)
        })

    } catch(error){
        console.log(error)
    }
}
export {allDocs}