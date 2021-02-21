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
        <div style={{width:'50vw', backgroundColor:'white', marginLeft:'25vw', paddingTop:'80px', minHeight:'100vh'}}>
            <img style={{height:'200px', width:'120px'}} src={beer.image_url} alt=""/>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetails;