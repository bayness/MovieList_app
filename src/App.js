import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { moviesData } from './Data';
import Description from './components/Description';


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
    <Router>
    <div className="App bg-slate-700">
      <Search
      searchrate={searchrate}
      handlesearch={handlesearch}
      searchvalue={searchvalue}
      handlerate ={handlerate}
      
      />
      <Switch>
      <Route exact path="/description/:name" render={(props)=> <Description {...props} movies={movies} />}/>
      <Route exact path="/" render={(props)=> <MovieList films={movies.filter(
        (movie) =>  movie.name.toLowerCase().includes(searchvalue.toLowerCase().trim() ) && movie.rating>=searchrate )}/>
      }/>

      <MovieList films={movies.filter(
        (movie) =>  movie.name.toLowerCase()
        .includes(searchvalue.toLowerCase().trim()
        ) &&
        movie.rating>=searchrate
        
        )}/>
        </Switch>
      <AddMovie handleadd={handleadd}/>
    </div>
    </Router>
  );
}


export default App;