import Anchor from "./anchor.js";
const Movie=(props)=>{
        return(
            <div className="row_movie">
                <div className="image_container">
                    <div className="m1">
                        <img src={props.imageurl}/> 
                    </div>         
                </div>
                <div className="datail_contin">
                    <h2 style={{color: "white"}}>{props.Name}</h2>
                    <p style={{color: "white"}}>{props.year} | {props.duration} |{props.genre} </p>
                    <h3 style={{color: "white"}}> Description </h3>
                    <p style={{color: "white"}}>RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad.</p>
                    <Anchor/>
                </div>
            </div>
        )
    }



export default Movie;

