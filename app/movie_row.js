import Anchor from "./anchor.js";
import Delete from "./delete.js"
const Moviedata=(props)=>{
    return(
            <div className="row_movie">
                <div className="image_container">
                    <div className="m1">
                        <img src={props.image}/> 
                    </div>         
                </div>
                <div className="datail_contin">
                    <h2 style={{color: "white"}}>{props.name}</h2>
                    <p style={{color: "white"}}>{props.year} | {props. Duration} |{props.Genre} </p>
                    <h3 style={{color: "white"}}> Description </h3>
                    <p style={{color: "white"}}>{props.summary}</p>
                    <div className="anchor">
                        <Anchor/>
                        <Delete
                           {...props}
                        />
                    </div>
                </div>
            </div>
        
    )
}

export default Moviedata;



