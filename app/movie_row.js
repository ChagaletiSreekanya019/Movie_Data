import Anchor from "./anchor.js";
import {movies} from "./data.js";
import Movies from "./delete.js";
export default function Movie_data(){
    const Movie=movies.map(movie=>
            <div className="row_movie">
                <div className="image_container">
                    <div className="m1">
                        <img src={movie.imageurl}/> 
                    </div>         
                </div>
                <div className="datail_contin">
                    <h2 style={{color: "white"}}>{movie.Name}</h2>
                    <p style={{color: "white"}}>{movie.year} | {movie.duration} |{movie.genre} </p>
                    <h3 style={{color: "white"}}> Description </h3>
                    <p style={{color: "white"}}>{movie.discription}</p>
                    <Anchor/>
                </div>
            </div>
        
    )
    return (Movie);
}





