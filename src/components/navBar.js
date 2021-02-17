import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {

    const styleNav={
            height:"50px",
            backgroundColor: '#3DC4FC',
            color: 'white',
            fontSize: '1.5em',
            fontWeight: '400',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
    }

    return (
        <div>
             <div class="glyphicon glyphicon-home" style={{backgroundColor: '#3DC4FC', height: '50px'}}></div>
            <nav style={styleNav}>
                <Link style={{color:"white", textDecoration:"none"}}to="/">Home</Link>
                <Link style={{color:"white", textDecoration:"none"}}to="AllBeers">All Beers</Link>
                <Link style={{color:"white", textDecoration:"none"}}to="RandomBeer">Random Beer</Link>
                <Link style={{color:"white", textDecoration:"none"}}to="NewBeer">New Beer</Link>
            </nav>
        </div>
    );
}
export default NavBar;