import React, {useState, useEffect} from 'react';
import axios from 'axios';

function BeerDetails(props) {
    console.log(props)
    let [beer, setBeer] = useState([])


useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`)
    .then(dataBeer1 =>{
        console.log(dataBeer1)
        setBeer(dataBeer1.data)})
    
    }, [])

    console.log(props.match)
    return (
        <div>
            <img style={{height:'200px', width:'120px'}} src={beer.image_url} alt=""/>
            {beer.name},
            {beer.name},
            {beer.tagline},
            {beer.first_brewed},
            {beer.attenuation_level},
            {beer.description}
            {beer.contributed_by}
        </div>
    );
}

export default BeerDetails;