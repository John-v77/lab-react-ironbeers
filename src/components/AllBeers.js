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
                <div style={{height:'60px'}}></div>
            </div>
            
         </div>  )})
         
    }
    
    const styleAllItems={
        padding:'20px',
        marginLeft:"25vw",
        width:"47.9vw",
        backgroundColor:"white",
        display:'flex',
        alignItems: "center",
        borderBottom: '2px solid lightgrey'
    }

    const styleDetails={
        
        justifyText: "left",
        padding:'20px',
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        alignItems: "center"
        
    }

    return (
        <div>
            {showBeers()}
        </div>
    );
}



export default AllBeers;