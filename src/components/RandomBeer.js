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
        <div>
            <div>
            <img style={styleRandom} src={randomBeer.image_url}/>
        </div>
            <div>
                {randomBeer.name}
            </div>
        </div>
    );
}

export default RandomBeer;