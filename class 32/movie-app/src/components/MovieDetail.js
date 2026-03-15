import { useState, useEffect } from "react"
import { MovieDetails } from "../api"
import { useParams } from "react-router-dom"


function MovieDetail(){
    
    const {id} = useParams();
    const[movie, setMovie] = useState(null); //store the fetch movie details
    const[error, setError] = useState(null); //handle the error when fetched data 

    // fetch the moviedetails from the api

    useEffect(() => {
        const MovieDetail = async () => {
            try {
                const data = await MovieDetails(id);
                setMovie(data)
            } catch(error){
                setError("failed to fetch the movie details")
            }
        }
        MovieDetail(); //function call
    }, [id])

    // condition if data loading
    if(!movie){
        return <h1 className="text-4xl text-center font-bold">Data is loading plesee wait....</h1>
    }

    if(error){
        return <h1 className="text-2xl ">Error loading the details</h1>
    }

    return (
        <div className=" flex p-4">
            <img src = {movie.Poster} className="mr-10"/>
            <div className="mt-4 ms-4">
                <h1 className="text-4xl">{movie.Title}</h1>
                <h3 className="text-2xl mt-4">Year: <span className="text-orange-900 text-3xl">{movie.Year}</span></h3>
                <h3 className="text-2xl mt-4">Plot: <span className="text-orange-900 text-3xl">{movie.Plot}</span></h3>
                <h3 className="text-2xl mt-4">Actors: <span className="text-orange-900 text-3xl">{movie.Actors}</span></h3>

            </div>
        </div>
    )

}

export default MovieDetail