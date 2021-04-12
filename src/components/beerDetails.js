import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/beerDetails.css';

function BeerDetails(props) {

    let [beer, setBeer] = useState([])

useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
    .then(dataBeer1 =>{
        setBeer(dataBeer1.data)})
    }, [])

    return (
        <div className='beer-details'>
            <img className='beer-details-img' src={beer.image_url} alt=""/>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>first brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p className='Beer-description'>{beer.description}</p>
            <p>contributed by: {beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetails;