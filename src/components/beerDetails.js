import React, {useState, useEffect} from 'react';
import axios from 'axios';

function BeerDetails(props) {
    console.log(props)
    let [newBeer, setNewBeer] = useState([])


useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`)
    .then(dataBeer1 =>{
        console.log(dataBeer1)
        setNewBeer(dataBeer1.data)})
    
    }, [])

    console.log(props.match)
    return (
        <div>
            {setNewBeer}
        </div>
    );
}

export default BeerDetails;