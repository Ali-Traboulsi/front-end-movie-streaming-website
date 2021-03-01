import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    state = {clicked:false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="home">Cinephilia<i className='fas fa-film'></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="movies" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Movies
        </a>
        <div className="dropdown-menu"aria-labelledby="navbarDropdownMenuLink" >
            <Link to="/movies/horror" className='dropdown-item'>Horror</Link>
            <Link to="/movies/romantic" className='dropdown-item'>Romantic</Link>
            <Link to="/movies/action" className='dropdown-item'>Action</Link>
            <Link to="/movies/superheroes" className='dropdown-item'>Superheroes</Link>
            <Link to="/movies/sci-fi" className='dropdown-item'>Sci-Fi</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="series" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Series
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/series/drama" className='dropdown-item'>Drama</Link>
            <Link to="series/sitcom" className='dropdown-item'>Sitcom</Link>
            <Link to="series/animated" className='dropdown-item'>Animated</Link>
            <Link to="series/investigation" className='dropdown-item'>Investigation</Link>
            <Link to="series/sci-fi" className='dropdown-item'>Sci-Fi</Link>
            <Link to="series/documentaries" className='dropdown-item'>Documentaries</Link>
        </div>
      </li>
    </ul>
  </div>

  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder= "Search..." aria-label="Search"/>
    <button className="btn" type="submit"><i className="fas fa-search"></i></button>
  </form>
</nav>
           
        )
    }
}



export default Navbar

/*

 <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Cinephilia<i className='fas fa-film'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'far fa-times-circle' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map ((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                     {item.title}
                                 </a>
                            </li>
                        )
                    })}
                   
                </ul>
                <Button>Sign up</Button>
            </nav>
*/