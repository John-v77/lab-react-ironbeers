import React, {useState, useEffect} from 'react';
import axios from 'axios';


function RandomBeer(props) {

    let [randomBeer, setRandomBeer] = useState([])


    useEffect( () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(res =>{
        setRandomBeer(res.data)
    })
}, [])

const styleRandom={
    width:'100px'
}

    return (
        <div style={{width:'50vw', backgroundColor:'white', marginLeft:'25vw', paddingTop:'80px', minHeight:'100vh'}}>
            <div>
            <img style={styleRandom} src={randomBeer.image_url}/>
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
            </div>
        </div>
    );
}

export default RandomBeer;