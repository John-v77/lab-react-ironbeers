import React from 'react';
import BeerDetails from './beerDetails';


function Home(props) {
    return (
        <div style={{width:'50vw', backgroundColor:'white', marginLeft:'25vw', paddingTop:'40px',display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={require('../assets/beers.png')} alt="Pictures2" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
            <img src={require('../assets/new-beer.png')} alt="Pictures2" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
            <img src={require('../assets/random-beer.png')} alt="Pictures2" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui, perspiciatis nulla voluptate dignissimos, quibusdam ex nemo ullam, velit possimus assumenda quasi non dolore recusandae nesciunt fugiat optio nihil ducimus?</p>
        
        </div>
    );
}

export default Home;