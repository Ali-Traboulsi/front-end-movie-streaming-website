import React from 'react';
import MoviDetails from './components/movie-details/Main-Movie-Details/MoviDetails';
import './App.css';
import MainPage from './components/movie-card/MainPage/MainPage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
