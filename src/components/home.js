import React from 'react';
import BeerDetails from './beerDetails';
import { Link } from 'react-router-dom';

function Home(props) {
    const style={
        textJustify:'newspaper',
        width:'35vw' 
    }


    return (
        <div style={{width:'50vw', backgroundColor:'white', marginLeft:'25vw', paddingTop:'40px',display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={require('../assets/beers.png')} alt="Pictures2" />
            <Link to={`/allbeers`}  style={{textDecoration:'none'}}><h2 style={{color:'black'}}>All beers</h2></Link>
            <p style={style}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
            <img src={require('../assets/new-beer.png')} alt="Pictures2" />
            <Link to={`/RandomBeer`} style={{textDecoration:'none'}}><h2 style={{color:'black'}}>Random Beer</h2></Link>
            <p style={style}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
            <img src={require('../assets/random-beer.png')} alt="Pictures2" />
            <Link to={`/NewBeer/`} style={{textDecoration:'none'}}><h2 style={{color:'black'}}>New Beer</h2></Link>
            <p style={style}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
        
        </div>
    );
}

export default Home;