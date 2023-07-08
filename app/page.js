import Header from "./header.js";
import "./header.css";
import Movie from "./delete.js";
import Movie_data from "./movie_row.js";
import Anchor from "./anchor.js";
export default function App(){
    return(
        <>
            <Header/>
            <Movie_data/>
            <Movie/>
            
        </>
    )
}
