import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div style={styleAllItems}>
            <img style={{height:'100px', width:'60px'}} src={eachBeer.image_url} alt=""/>
            <Link to={`/allbeers/${eachBeer._id}`}>{eachBeer.name}</Link>
            <li>{eachBeer.tagline}</li>
            <li>{eachBeer.contributed_by}</li>
            <div style={{height:'60px'}}></div>
            
         </div>  )})
         
    }
    
    const styleAllItems={
        marginLeft:"22.5vw",
        width:"55vw",
        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        alignItems: "center",
    }

    return (
        <div>
            Wiki Beers
            {showBeers()}
        </div>
    );
}



export default AllBeers;