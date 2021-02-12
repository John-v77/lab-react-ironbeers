import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {

    const styleNav={
            backgroundColor: 'grey',
            color: 'white',
            fontSize: '1.5em',
            fontWeight: '400',
            textWecoration: 'none',
            display: 'flex',
            justifyContent: 'space-around'
    }

    return (
        <div>Hello</div>
        // <nav style={styleNav}>
        //     <Link to="/">Home</Link>
        //     <Link to="AllBeers">All Beers</Link>
        //     <Link to="RandomBeer">Random Beer</Link>
        //     <Link to="NewBeer">New Beer</Link>
        // </nav>
    );
}
export default NavBar;