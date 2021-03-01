import React from 'react';
import './App.css';
import Navbar from './components/navbar-container/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
        <Route path="/">
        </Route>

        <Route path="/movie">

        </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
