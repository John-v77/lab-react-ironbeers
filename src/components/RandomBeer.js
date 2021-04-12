import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/beerDetails.css';


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
        <div className='beer-details'>
            <img className='beer-details-img' src={randomBeer.image_url} alt=""/>
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>first brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation Level: {randomBeer.attenuation_level}</p>
            <p className='beer-description'>{randomBeer.description}</p>
            <p>contributed by: {randomBeer.contributed_by}</p>
        </div>
    );
}

export default RandomBeer;