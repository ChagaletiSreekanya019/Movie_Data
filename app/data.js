export const Movies = [{
      id: 0, 
      Name: 'RRR',
      votes: 0,
      year: 2022,
      duration: "2h 43m",
      genre:"Fredom fight",    
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQoQVTwCvwzPtQYV55abOHobtucy0DQpaZ01ak3X0ValtAOVP_nFnymASfRc5uWF-vOE&usqp=CAU",
      discription:"RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad."
    }, {
      id: 1, 
      Name: 'PUSHPA',
      votes: 0,
      year: 2020,
      duration: "2h 30m",
      genre:"Drama,Romance",    
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwquoB9OirteGsHVkcprOnckf4giOBNoMqbw&usqp=CAU",
      discription:"A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business."
      
    }, {
      id: 2, 
      Name: 'VARSHAM',
      votes: 0,
      year: 2004,
      duration: "2h 30m",
      genre:"Drama,Love,Romantic",    
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhw-xNabL3DGFtQXKSrZTQM0_kF-q4uHV1Ig&usqp=CAU",
      discription:"Varsham Telugu Full Movie | Prabhas | Trisha Starring Baahubali Prabhas, Trisha, Gopichand in lead roles. Music Composed by Devi Sri Prasad."
    }, {
      id: 3, 
      Name:"RANGASTALAM",
      votes:0,
      year: 2018,
      duration:"2h 40m",
      genre: "Drama,Romantic",    
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsShZSiK-kg8sti0_c9_Qk3v9vYrfhm4eT7A&usqp=CAU",
      discription:"A young man with impaired hearing and his elder brother decide to oppose the tyrannical rule of Phanindra, the corrupt leader of their village's local government."
    }, {
      id: 4, 
      Name: 'MIRCHI',
      votes: 0,
      year: 2011,
      duration: '2hr 50m',
      genre:"Drama,Love,Action",      
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuUWmJx8SHSJfXH8gvStFr8M-chPah9H07AZXbcY7Z-KRrRjGMx8oO93UGwOTt9aDPpU&usqp=CAU",
      discription:"A girl falls in love with a boy after he helps her and manages to win the hearts of her family with his good deeds. However, she is unaware that he belongs to a rival family"
    }, {
      id: 5, 
      Name: 'YASHODHA',
      votes: 0,
      year: 2022,
      duration: "2h 32m",
      gener:"Action And Suspence thriller movie",     
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVz_NX4GmTI2wTJ_j1dYIHCPb0zJ2kq2GdIA&usqp=CAU",
      discription:"An innocent woman agrees to be a surrogate mother at a highly plush facility to find her missing sister. However, she uncovers the shocking truth about the centre"
    }, {
      id: 6, 
      Name: "NENU LOCAL",
      votes: 0,
      year: 2014,
      duration: "2h 15m",
      gener: "Love, Drama",     
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZm_PfkDGzgDVoeK1tjP7AJhQES2S_SwLFWLAr8HFLHmtjsOG4eSWueLtw8v4o7Hcaz0w&usqp=CAU",
      discription:"Babu, an easy-going young man, falls in love with a woman. However, he learns that he has a competitor in winning the woman's father's approval and takes up a challenge to impress him"
    }, {
      id: 7, 
      Name: 'SEETHA RAMAM',
      votes: 0,
      year: 2022,
      duration: "2h 43m",
      genre:"Drama,Love",     
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMFB619QSj3ZeSO7Ew2VVbwRQWK_8KssqULKkm1d0sZuQ4fS72JxDN7SiZZzSBUEHdl0&usqp=CAU",
      discription:"Sita Ramam is a 2022 Indian Telugu-language period romantic drama film written and directed by Hanu Raghavapudi. Produced by Vyjayanthi Movies and Swapna Cinema"
    }, {
      id: 8, 
      Name: 'INDHRA',
      votes: 0,
      year: 2001,
      duration: "2h 50m",
      genre:"Drama,Action",      
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArHiEja1MEoqDm-QM7vcX-ZWb7Lh_oBkQG0w2OANEYMCAxyp4iHR-lQzxtuQ36nELo8Q&usqp=CAU",
      discription:"A man embarks on a quest to make peace between two families fighting over the water problem in their district. In a bid to solve this crisis, he agrees to marry a girl from the rival family"
    }, {
      id: 9, 
      Name: 'DHRUSHAM',
      votes: 'Bhasker',
      year: 2018,
      duration: "2h 06m",
      genre:"Drama ,Thirller",      
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETuno-HR6rXiLt4dNAu1Rn_l7fDUf_7hnV6iTzeHy4fnV_WFrWT3IPPRO1X-h0i10nJY&usqp=CAU",
      discription:"Rambabu, a cable operator, lives with his beloved wife Jyothi and two daughters. One day, his family inadvertently gets involved in a grave crime and he must go to great lengths to protect them"
    }]


const App=()=>{
    const[movie,setMovie]=useState(Movies);
    function handleDelete(key){
        const newMovie=movie.filter((item)=>key !== item.id);
        setMovie(newMovie)
    }
    return(
        <>
            <Header/>
            {Movies.map(movie=>
                <Movie_data
                    key={movie.id}
                    movie={movie}
                    name={movie.name}
                    summary={movie.discription}
                    image={movie.imageurl}
                    Genre={movie.genre}
                    Year={movie.year}
                    Duration={movie.duration}
                    onDelete={()=>handleDelete(movie.id)}
                        
                    
                 />
            )}
            
            
        </>
        )
}

export default App;


























