"use client"
import React, { useState } from "react";
const Anchor = (props) => {
    const [likes, setLikes] = useState(props.like);
    function voteUp () {
        setLikes(likes + 1);
  };

    function voteDown () {
        setLikes(likes - 1);
  };

    return (    
        <>
            <div className="a">
                <button onClick={()=>{
                    voteUp()
                    props.onUpdateRating(props.movie_id,likes);
                 }}>
                    <img src="Icon - Like.svg" alt="Vote Up" />
                </button>
            </div>
            <div className="d">
                <p className="count">{props.like}</p>
            </div>
            <div className="b">
                <button onClick={()=>{
                    voteDown()
                    props.onUpdateRating(props.movie_id,likes);
                }}>
                <img src="Icon - Like (1).svg" alt="Vote Down" />
                </button>
            </div>
           
            
        </>
      );
};

export default Anchor;


