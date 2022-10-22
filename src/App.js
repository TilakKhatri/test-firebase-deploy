
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Addblog from './components/Addblog';
import AddMovies from './components/AddMovies';
import EditMovie from './components/EditMovie';
import MoviesList from './components/MoviesList';
// import RealtimeMovies from './components/RealtimeMovies';

function App() {

  return (
    <>
      {/* <Addblog /> */}
      <div style={{ display: "flex" }}>
        <AddMovies />
        <EditMovie />
      </div>
      <MoviesList />

    </>
  );
}

export default App;
