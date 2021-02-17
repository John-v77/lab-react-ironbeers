import React, {useState, useEffect} from 'react';
import axios from 'axios';

function BeerDetails(props) {
    console.log(props)
    // console.log(props.match.params.id)
    let [beer, setBeer] = useState([])

    // /${props.match.params.id}
useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
    .then(dataBeer1 =>{
        // console.log(dataBeer1)
        setBeer(dataBeer1.data)})
    
    }, [])

    // console.log(props.match)
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