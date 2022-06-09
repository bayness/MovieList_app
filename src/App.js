import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { moviesData } from './Data';

function App() {
  const [movies,setMovies] = useState(moviesData);
  const [searchvalue,setSearchvalue] = useState("");
  const [searchrate,setSearchrate] = useState("");
  const handleadd=(newmovie) => {
    setMovies([...movies,newmovie])
  }
  const handlesearch=(e) => {
    setSearchvalue(e.target.value)
  }

  const handlerate=(newrate) => {
    setSearchrate (newrate)
  }
  
  
  return (
    <div className="App bg-slate-700">
      <Search
      searchrate={searchrate}
      handlesearch={handlesearch}
      searchvalue={searchvalue}
      handlerate ={handlerate}
      
      />
      <MovieList films={movies.filter(
        (movie) =>  movie.name.toLowerCase()
        .includes(searchvalue.toLowerCase().trim()
        ) &&
        movie.rating>=searchrate
        
        )}/>
      <AddMovie handleadd={handleadd}/>
    </div>
  );
}


export default App;