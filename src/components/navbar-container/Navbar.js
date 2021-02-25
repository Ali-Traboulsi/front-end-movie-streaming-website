import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    state = {clicked:false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
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
        )
    }
}

export default Navbar