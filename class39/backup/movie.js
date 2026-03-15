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

const creatDoc = async () => {
    try {
        // create the new document
        const m1 = new MovieModel({
            name: "RRR",
            ratings: 5,
            genre:["action", "drama", "bond"],
            isActive: false, 
            comments: [{
                value: "extraordinary movie, super hit"
            },{
                value: "movie is very good"
            }
        
        ]
        });
        // save the document
        const result = await m1.save(); //save method is used to save the data
        console.log(result)

    } catch(error){
        console.log(error)
    }
}

export {creatDoc}