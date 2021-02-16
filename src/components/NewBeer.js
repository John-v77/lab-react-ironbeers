import React, {useState} from 'react';
import axios from 'axios';

function NewBeer(props) {

    const[newBeer, setNewBeer] = useState({});
    // console.log('name', name)


    function submitForm(e){
        e.preventDefault();

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then((resp) => {
            console.log('response!', resp)
        })
    }

    function updateForm(e,t){
        setNewBeer({...newBeer, [e.taget.id]: e.taget.value});
    }
    console.log('Data is', newBeer);

    return (
        <div style={{width:'50vw', backgroundColor:'white', marginLeft:'25vw', paddingTop:'40px'}}>
           <form onSubmit={submitForm} style={{display:'flex', flexDirection:'column', alignItems:'center'}} >

                <label for="name">Name</label>
                <input type="text" id="name" onChange={updateForm}></input>

                <label for="tagline">Tagline</label>
                <input type="text" id="tagline" onChange={updateForm}></input>

                <label for="description">Description</label>
                <input type="text" id="description" onChange={updateForm}></input>

                <label for="first_brewed">First Brewed</label>
                <input type="text" id="first_brewed" onChange={updateForm}></input>

                <label for="brewer_tips">Brewer Tips</label>
                <input type="text" id="brewer_tips" onChange={updateForm}></input>

                <label for="attenuation_level">attenuation_level</label>
                <input type="text" id="attenuation_level" onChange={updateForm}></input>

                <label for="contributed_by">Contributed By</label>
                <input type="text" id="contributed_by" onChange={updateForm}></input>

                <button type='submit'>Create new beer!</button>
           </form>
        </div>
    );
}

export default NewBeer;