import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/AllBeers.css';

function AllBeers(props) {
    
    let[beers, setBeers] = useState([])
    
    // useEffect(() => {}, [])


    useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(res => {
        console.log(res)
        setBeers(res.data)
    })

    }, [])
    console.log(beers)

    const showBeers = () => {
        return beers.map(eachBeer => {
            return(
            <div className='allItems'>
                <img src={eachBeer.image_url} alt=""/>
                <div className='singleItem'>
                    <Link to={`/allbeers/${eachBeer._id}`} style={{color:'black'}}><h3>{eachBeer.name}</h3></Link>
                    <li>{eachBeer.tagline}</li>
                    <li>{eachBeer.contributed_by}</li>
                    
                </div>
                
            </div>  )})
    }
    

    return (
        <div>
            {showBeers()}
        </div>
    );
}



export default AllBeers;