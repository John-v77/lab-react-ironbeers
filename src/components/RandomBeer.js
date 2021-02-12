import React, {useState, useEffect} from 'react';
import axios from 'axios';


function RandomBeer(props) {

    let [randomBeer, setRandomBeer] = useState([])


    useEffect( () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(dataBeer =>{
        setRandomBeer(dataBeer.data)
    })
}, [])

    return (
        <div>
            {randomBeer}
        </div>
    );
}

export default RandomBeer;