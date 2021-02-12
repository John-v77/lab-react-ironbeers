import React, {useState, useEffect} from 'react';
import axios from 'axios';

function AllBeers(props) {
    
    let[beers, setBeers] = useState([])
    
    // useEffect(() => {}, [])


    useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(dataZ => {
        console.log(dataZ)
        setBeers(dataZ.data)
    })

    }, [])


    const showBeers = () => {
        return beers.map(eachBeer => <li>{eachBeer.data.name}</li>)
    }


    return (
        <div>
            Wiki Beers
            {showBeers}
        </div>
    );
}



export default AllBeers;