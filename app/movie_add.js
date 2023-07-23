"use client"
import React, { useState } from "react";
const Movieadd = ({ onAddMovie }) => {
    const [formData, setFormData] = useState({
        Name: "",
        votes: 0,
        year: "",
        duration: "",
        genre: "",
        imageurl: "",
        discription: "",
      });
    
    const [showForm,setShowForm]=useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddMovie(formData); // Call onAddMovie with the formData to add the movie
        setFormData({
          Name: "",
          votes: 0,
          year: "",
          duration: "",
          genre: "",
          imageurl: "",
          discription: "",
        });
        setShowForm(false);
    };
    const handleAddMovieClick = () => {
    setShowForm(true); // Show the form when "Add Movie" button is clicked
    };

    return (
        <div className="AddMovie">
            <div className="newmovietext"></div>
            <div className="form">
                {showForm ?(
                    <form onSubmit={handleSubmit}>
                        <label> Name: </label><br/>
                          <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            placeholder="Movie Name"
                          />
                          <br/>
                        <label> Duration: </label><br/>
                          <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="Movie duration"
                          />
                          <br/>
                        <label> Year: </label><br/>
                          <input
                            type="text"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            placeholder="Movie year"
                          />
                          <br/>
                        <label> Genre: </label><br/>
                          <input
                            type="text"
                            name="genre"
                            value={formData.genre}
                            onChange={handleChange}
                            placeholder="Movie genre"
                          />
                          <br/>
                        <label> Imageurl: </label><br/>
                          <input
                            type="text"
                            name="imageurl"
                            value={formData.imageurl}
                            onChange={handleChange}
                            placeholder="Movie imageurl"
                          />
                          <br/>
                        <label> Discription: </label><br/>
                          <input
                            type="text"
                            name="discription"
                            value={formData.discription}
                            onChange={handleChange}
                            placeholder="Movie discription"
                          />
                          <br/>
                      <button type="submit">Add Movie</button>
                    </form>
                  ):(
                    <button onClick={handleAddMovieClick}>Add Movie</button>
                  )}
            </div>
        </div>
     );
};

export default Movieadd;
