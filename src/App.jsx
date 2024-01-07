
import Footer from './components/Footer';
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

import React, { useEffect, useState } from 'react'


function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('kick');
  
  const [loading, setLoading] = useState(false);
    const fetchMovieData = async () => {
    try {
        setLoading(true);
        const res = await fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=180a2870`);
        const data = await res.json();
        // console.log(data.Search);
        
        setAllMovieData(data.Search);

        
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}
useEffect(()=>{
 fetchMovieData()
},[])

  return (
    <div>
      <Navbar />
      <div className="bg ">
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <MovieCard allMovieData={allMovieData} loading={loading}  />
        <Footer/>
      </div>
    </div>
  )
}

export default App