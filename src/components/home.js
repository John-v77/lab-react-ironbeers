import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css'
function Home(props) {
    
    return (
        <div className='home-page'>
            <img src={require('../assets/beers.png')} alt="Pictures2" />
            <Link to={`/allbeers`}><h2 >All beers</h2></Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
           
            <img src={require('../assets/new-beer.png')} alt="Pictures2" />
            <Link to={`/RandomBeer`}><h2 >Random Beer</h2></Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
            
            <img src={require('../assets/random-beer.png')} alt="Pictures2" />
            <Link to={`/NewBeer/`}><h2 >New Beer</h2></Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
        
        </div>
    );
}

export default Home;