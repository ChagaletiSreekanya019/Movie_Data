const movies = [{
      id: 0, 
      Name: 'RRR',
      votes: 0,
      year: 2022,
      duration: "2h 43m",
      genre:"Fredom fight",    
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwquoB9OirteGsHVkcprOnckf4giOBNoMqbw&usqp=CAU"
    }, {
      id: 1, 
      Name: 'PUSHPA',
      votes: 0,
      year: 2020,
      duration: "2h 30m",
      genre:"Drama,Romance",    
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwquoB9OirteGsHVkcprOnckf4giOBNoMqbw&usqp=CAU"
    }, {
      id: 2, 
      Name: 'VARSHAM',
      votes: 0,
      year: 2004,
      duration: "2h 30m",
      genre:"Drama,Love,Romantic",    
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwquoB9OirteGsHVkcprOnckf4giOBNoMqbw&usqp=CAU"
    }, {
      id: 3, 
      Name:"RANGASTALAM",
      votes:0,
      year: 2018,
      duration:"2h 40m",
      genre: "Drama,Romantic",    
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsShZSiK-kg8sti0_c9_Qk3v9vYrfhm4eT7A&usqp=CAU"
    }, {
      id: 4, 
      Name: 'MIRCHI',
      votes: 0,
      year: 2011,
      duration: '2hr 50m',
      genre:"Drama,Love,Action",      
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwquoB9OirteGsHVkcprOnckf4giOBNoMqbw&usqp=CAU"
    }, {
      id: 5, 
      Name: 'YASHODHA',
      votes: 0,
      year: 2022,
      duration: "2h 32m",
      gener:"Action And Suspence thriller movie",     
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVz_NX4GmTI2wTJ_j1dYIHCPb0zJ2kq2GdIA&usqp=CAU"
    }, {
      id: 6, 
      Name: "NENU LOCAL",
      votes: 0,
      year: 2014,
      duration: "2h 15m",
      gener: "Love, Drama",     
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZm_PfkDGzgDVoeK1tjP7AJhQES2S_SwLFWLAr8HFLHmtjsOG4eSWueLtw8v4o7Hcaz0w&usqp=CAU"
    }, {
      id: 7, 
      Name: 'SEETHA RAMAM',
      votes: 0,
      year: 2022,
      duration: "2h 43m",
      genre:"Drama,Love",     
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMFB619QSj3ZeSO7Ew2VVbwRQWK_8KssqULKkm1d0sZuQ4fS72JxDN7SiZZzSBUEHdl0&usqp=CAU"
    }, {
      id: 8, 
      Name: 'INDHRA',
      votes: 0,
      year: 2001,
      duration: "2h 50m",
      genre:"Drama,Action",      
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArHiEja1MEoqDm-QM7vcX-ZWb7Lh_oBkQG0w2OANEYMCAxyp4iHR-lQzxtuQ36nELo8Q&usqp=CAU"
    }, {
      id: 9, 
      Name: 'DHRUSHAM',
      votes: 'Bhasker',
      year: 2018,
      duration: "2h 06m",
      genre:"Drama ,Thirller",      
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwquoB9OirteGsHVkcprOnckf4giOBNoMqbw&usqp=CAU"
    }]


const Movie(){
    return(
            <div className="row_movie">
                {movies.map((movie)=>(
                <div className="image_container">
                    <div className="m1">
                     <img src={movie.imageurl}/> 
                    </div>         
                </div>
                <div className="datail_contin">
                    <h2 style={{color: "white"}}>{move.Name}</h2>
                    <p style={{color: "white"}}>{movie.year} | {movie.duration} |{movie.genre} </p>
                    <h3 style={{color: "white"}}> Description </h3>
                    <p style={{color: "white"}}>RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad.</p>
                    <Anchor/>
                 ))}
                </div>
            </div>
        )
    }

export default Movie;































