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
          <Route path='/' exact={true}>
            <MainPage />
          </Route>
          <Route
            path='/movie/:id'
            render={(props) => {return <MoviDetails {...props} /> }}
          />
           
         
        </Switch>
      </Router>
    </div>
  );
}
export default App;
