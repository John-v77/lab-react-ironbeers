import React from 'react';
import {Link} from 'react-router-dom';
import './styles/navBar.css'

function NavBar(props) {

    return (
        <div>
            <nav className='styleNav'>
                <Link style={{color:"white", textDecoration:"none"}}to="/">Home</Link>
                <Link style={{color:"white", textDecoration:"none"}}to="AllBeers">All Beers</Link>
                <Link style={{color:"white", textDecoration:"none"}}to="RandomBeer">Random Beer</Link>
                <Link style={{color:"white", textDecoration:"none"}}to="NewBeer">New Beer</Link>
            </nav>
        </div>
    );
}
export default NavBar;