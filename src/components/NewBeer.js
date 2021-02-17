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

    function updateForm(e){
        setNewBeer({...newBeer, [e.target.name]: e.target.value});
    }
    console.log('Data is', newBeer);

    return (
        <div style={{width:'50vw', backgroundColor:'white', marginLeft:'25vw', paddingTop:'40px'}}>
           <form onSubmit={submitForm} style={{display:'flex', flexDirection:'column', alignItems:'center'}} >

                <label for="name">Name</label>
                <input name="name" onChange={updateForm} type="text"  ></input>

                <label for="tagline">Tagline</label>
                <input onChange={updateForm} type="text" name="tagline" ></input>

                <label for="description">Description</label>
                <input onChange={updateForm} type="text" name="description" ></input>

                <label for="first_brewed">First Brewed</label>
                <input onChange={updateForm} type="text" name="first_brewed" ></input>

                <label for="brewer_tips">Brewer Tips</label>
                <input onChange={updateForm} type="text" name="brewer_tips" ></input>

                <label for="attenuation_level">attenuation_level</label>
                <input onChange={updateForm} type="text" name="attenuation_level" ></input>

                <label for="contributed_by">Contributed By</label>
                <input onChange={updateForm} type="text" name="contributed_by" ></input>

                <button type='submit'>Create new beer!</button>
           </form>
        </div>
    );
}

export default NewBeer;