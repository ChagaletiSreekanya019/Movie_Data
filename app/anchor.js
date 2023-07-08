"use client"
import React, { useState } from "react";
import {movies} from "./data.js"
const Anchor = () => {
    const [num, setNum] = useState(0);
    const voteUp = () => {
        setNum(num + 1);
  };

    const voteDown = () => {
        setNum(num - 1);
  };

    return (    
        <>
          <div className="a">
            <button onClick={voteUp}>
              <img src="Icon - Like.svg" alt="Vote Up" />
            </button>
          </div>
          <div className="d">
            <p className="count">{num}</p>
          </div>
          <div className="b">
            <button onClick={voteDown}>
              <img src="Icon - Like (1).svg" alt="Vote Down" />
            </button>
          </div>
          <div className="c">
            <img
              src="fluent_delete-32-regular.svg"
              alt="Delete"
              onClick={() => onDelete(movie.id)}
            />
          </div>
        </>
      );
};

export default Anchor;

