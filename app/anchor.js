import Like from "./like.js";
import Dislike from "./dislike.js";
import Delete from "./delete.js";
export default function Anchor(){
    return(
        <div className="buttons">
            <Like/>
            <Dislike/>
            <Delete/>
        </div>
    )
}
