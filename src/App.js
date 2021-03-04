import React from 'react';
import MoviDetails from './components/movie-details/Main-Movie-Details/MoviDetails';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {


  let renderMovieDetails = (routerProps) => {
    let id = parseInt(routerProps.match.params.id)
    return <MoviDetails id={id}/>;
  }

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/'>
            <MainPage />
          </Route>

          <Route path='/movie/:id' render={params =>renderMovieDetails(params) }>
           <MoviDetails/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
